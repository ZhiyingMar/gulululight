/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { AxiosError } from "axios";

// const baseUrl = "/api";
const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";

class HttpMethods {
  // 返回值处理
  base(method: "get" | "post", url: string, params?: any): any {
    return new Promise((resolve,reject)=>{
        axios({
            method,
            url: baseUrl + url,
            data: params,
          }).then((response:any) => {
            console.log("success");
            
            resolve(response?.data??response)
          }).catch((error:AxiosError)=>{
            console.log("error");
            reject(error?.response?.data??error?.response)
          });
    })

  }

  // get方法处理
  get( url: string,params?: any) {
    return this.base('get',url,params)
  }

  // post方法处理
  post(url:string,params?:any,){
    return this.base('post',url,params)
  }
}

export default HttpMethods;
