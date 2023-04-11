/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { AxiosError } from "axios";
const config = require("@/utils/config");

const baseUrl =
  process.env.NODE_ENV === "development" ? config.TEST_URL : config.URL;

class HttpMethods {
  // 返回值处理
  base(
    method: "get" | "post" | "delete" | "put",
    url: string,
    params?: any
  ): any {
    return new Promise((resolve, reject) => {
      axios({
        method,
        url: baseUrl + url,
        params:method==='get'?params:{},
        data: params,
        headers:{
          Authorization:'bearer '+JSON.parse(window?.localStorage?.getItem('loginData')??'{}')?.token??''
        }
      })
        .then((response: any) => {
          resolve(response?.data ?? response);
        })
        .catch((error: AxiosError) => {
          console.log(error);
          
          if(error?.response?.status===403){
            setTimeout(()=>{
              window.localStorage.clear();
            window.location.reload() 
            },2000)
            
          }          
          reject(error?.response?.data ?? error?.response??'数据获取失败');
        });
    });
  }

  // get方法处理
  get(url: string, params?: any) {
    return this.base("get", url, params);
  }

  // post方法处理
  post(url: string, params?: any) {
    return this.base("post", url, params);
  }

  // delete方法处理
  delete(url: string, params?: any) {
    return this.base("delete", url, params);
  }

  // delete方法处理
  put(url: string, params?: any) {
    return this.base("put", url, params);
  }
}

export default new HttpMethods();
