import HttpMethods from ".";
import {LoginServer} from "./interface"

const baseUrl='/users'
export const registerServer=async(params:LoginServer)=>{
    const result=await HttpMethods.post(baseUrl,params)
    return result;
}