
import Login from "@/components/Login";
import Home from "@/components/Home";
import Mine from "@/components/Mine";
import NavBar from "@/components/NavBar";
import Register from "./components/register";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import { useState } from "react";

// const EventEmitter = require("events");
// const event = new EventEmitter();


function App() {
  
  const [login,setLogin]=useState(false);

  const loginShow=(isShow:boolean)=>{
    setLogin(isShow);
  };
  

  return (
    <>
      <NavBar loginShow={()=>loginShow(true)}></NavBar>
      <Routes>
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Login show={login} onHide={()=>loginShow(false)}></Login>
      
    </>
  );
}

export default App;
