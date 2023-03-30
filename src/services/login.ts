import HttpMethods from ".";

const baseUrl='/users'
export const login=async()=>{
    await new HttpMethods().get(baseUrl,{
        // "username":"test1",
        "password":"test1"
    }).then((res: any)=>{
        console.log(res);
        
    }).catch((error: any)=>{
        console.log(error);   
    })
}