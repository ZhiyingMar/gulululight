
import Login from "@/components/Login";
import Home from "@/components/Home";
import Mine from "@/components/Mine";
import NavBar from "@/components/NavBar";
import Register from "./components/register";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import { useState } from "react";


function App() {
  
  const [login,setLogin]=useState(false);
  const [username,setUsername]=useState(JSON.parse(window?.localStorage?.getItem('loggerData')??'{}')?.username??'');
  
  // const [alert,setAlert]=useState(false);
  // const [message,setMessage]=useState('')
  const loginShow=(isShow:boolean)=>{
    setLogin(isShow);
  };
  
  // 登录完成赋值
  const changeName=(value:string)=>{
    setUsername(value)
  }
  // const errorHandle=(message:string)=>{
  //   setAlert(true);
  //   setMessage(message);
  // }

  return (
    <>
      <NavBar loginShow={()=>loginShow(true)} username={username}></NavBar>
      <Routes>
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Login show={login} onHide={()=>loginShow(false)} change={changeName}></Login>
      
    </>
  );
}

export default App;
