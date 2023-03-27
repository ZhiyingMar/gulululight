import Footer from "@/components/Footer";
import { Nav, Navbar, Container,Button } from "react-bootstrap";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Mine from "@/components/Mine";
import { Routes, Route, Link } from "react-router-dom";
import logo from "@/logo.svg";
import slogan from "@/slogan.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [login,setLogin]=useState(false);
  const loginShow=(isShow:boolean)=>{
    setLogin(isShow);
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* 此处不能使用bsPrefix，会覆盖掉原本的样式 */}
        <Container className="left-container">
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
          <Nav>
            <Button variant="outline-light" onClick={()=>loginShow(true)}>登录</Button>
            <Nav.Link href="#" as="span">
              <Link to="/mine">了解项目</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Login show={login} onHide={()=>loginShow(false)}></Login>
      <Footer></Footer>
    </>
  );
}

export default App;
