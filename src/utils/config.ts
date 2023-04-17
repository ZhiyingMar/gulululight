// require('dotenv').config();
const config={
    URL:'https://first-iws7.onrender.com/api',// 后端url正式地址
    TEST_URL:'http://localhost:3000/api',// 后端url测试地址
    ExpiresIn:5*24*60*60,//token保存有效期

}
module.exports=config;