import HttpMethods from ".";
import {LoginServer} from "./interface"

const baseUrl='/login'
export const loginServer=async(params:LoginServer)=>{
    const result=await new HttpMethods().post(baseUrl,params)
    return result;
}