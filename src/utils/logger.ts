/**
 * 内容打印,正式环境不打印内容
 */

const info=function(...params: any[]){
    if(process.env.NODE_ENV!=='production'){
        console.log(...params);
    } 
};

const warn=(...params: any[])=>{
    if(process.env.NODE_ENV!=='production'){
        console.warn(...params);
    }
};

const error=(...params: any[])=>{
    if(process.env.NODE_ENV!=='production'){
        console.error(...params);
    }
};

module.exports={
    info,warn,error
}