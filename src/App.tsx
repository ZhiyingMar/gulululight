import Footer from "@/components/Footer";
import { Nav, Navbar, Container,Button,NavDropdown,Row,Col } from "react-bootstrap";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Mine from "@/components/Mine";
import NewMessage from "@/components/Message/NewMessage";
import HoverButton from "@/components/tool/HoverButton";
import { Routes, Route, Link } from "react-router-dom";
import logo from "@/logo.svg";
import slogan from "@/slogan.svg";
import "./App.css";
import { useState,useEffect } from "react";


function App() {
  
  const [login,setLogin]=useState(false);
  const [username,setUsername]=useState(JSON.parse(window.localStorage?.getItem('loggerData')??'')?.username??'');
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
      <Navbar  className="topnav navbar-expand-lg fixed-top bg-primary">
        {/* 此处不能使用bsPrefix，会覆盖掉原本的样式 */}
        <Container fluid >
          <Navbar.Brand href="#" as="span">
            <Link to="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="35"
                className="d-inline-block align-top"
              />
              <img
                alt=""
                src={slogan}
                width="100"
                height="35"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
            <Nav.Link href="#" as="span">
              <Link className="nav-color-bg text-decoration-none"  to="/">首页</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link className="nav-color-bg text-decoration-none" to="/mine">关于项目</Link>
            </Nav.Link>
            </Nav>
            <NavDropdown  bsPrefix="nav-color-bg text-decoration-none" title="其他操作" >
              <NavDropdown.Item href="#">
                <Link className="nav-color-bg-light text-decoration-none"  to="/register">创建新账号</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">跳
                {/* <Link className="nav-color-bg-light text-decoration-none"  to="/register"></Link> */}
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <Nav>
            <Button className="btn-info btn-round shadow" onClick={()=>loginShow(true)}> 登录 </Button>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Login show={login} onHide={()=>loginShow(false)} change={changeName}></Login>
      <Footer></Footer> 
    </>
  );
}

export default App;
