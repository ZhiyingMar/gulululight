import HttpMethods from ".";
import {LoginServer} from "./interface"

const baseUrl='/login'
export const loginServer=async(params:LoginServer)=>{
    const result=await HttpMethods.post(baseUrl,params)
    return result;
}