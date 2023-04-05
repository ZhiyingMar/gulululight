import HttpMethods from ".";
import { List,Content } from "./interface";
// 留言
const baseUrl='/message'

// 留言列表
export const getList=async(params:List)=>{
    const result=await HttpMethods.get(baseUrl,params)
    console.log(result);
    
    return result;
   
}

// 删除
export const deleteMessage=async(id:string)=>{
    const result=await HttpMethods.delete(`${baseUrl}/${id}`)
    return result;
}

// 更新
export const updateMessage=async(id:string,params:Content)=>{
    const result=await HttpMethods.put(`${baseUrl}/${id}`,params)
    return result;
}

// 添加
export const addMessage=async(params:Content)=>{
    const result=await HttpMethods.post(baseUrl,params)
    return result;
}