import HttpMethods from ".";

const baseUrl='/login'
export const login=async()=>{
    await new HttpMethods().post(baseUrl,{
        // "username":"test1",
        "password":"test1"
    }).then((res: any)=>{
        console.log(res);
        
    }).catch((error: any)=>{
        console.log(error.error);
        
    })
}