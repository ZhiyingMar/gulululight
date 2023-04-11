import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import logo from "@/assets/logo.svg";
import slogan from "@//assets/slogan.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import eventBus from "@/utils/eventBus";
import ModalBasic from "@/components/tool/Modal";

const NavBar = ({ loginShow }: any) => {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);

  const loginClick = () => {
    if (username) {
      setShow(true);
      return;
    }
    // 弹窗展示
    loginShow();
  };

  // 关闭弹窗处理
  const handleClose = () => setShow(false);

  // 退出登录处理
  const handleConfirm = () => {
    window.localStorage.clear();
    setUsername("");
    handleClose();
  };

  // 接收登录信息，更改展示内容
  useEffect(() => {
    eventBus.on("login", (value: string) => {
      setUsername(value);
    });
  }, []);

  // 刷新后用户名展示
  useEffect(() => {
    setUsername(JSON.parse(window?.localStorage?.getItem('loginData')??'{}')?.username??'');
  }, []);

  return (
    <>
      <Navbar id="nav-bar" className="topnav navbar-expand-lg fixed-top bg-primary ">
        {/* 此处不能使用bsPrefix，会覆盖掉原本的样式 */}
        <Container fluid>
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
                <Link className="nav-color-bg text-decoration-none" to="/">
                  首页
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link
                  className="nav-color-bg text-decoration-none"
                  to="/register"
                >
                  创建账号
                </Link>
              </Nav.Link>
            </Nav>
            <NavDropdown
              bsPrefix="nav-color-bg text-decoration-none"
              title="其他操作"
            >
              <NavDropdown.Item href="#">
                <Link
                  className="nav-color-bg-light text-decoration-none"
                  to="/register"
                >
                  创建新账号
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                跳
                {/* <Link className="nav-color-bg-light text-decoration-none"  to="/register"></Link> */}
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <Nav>
            <Button className="btn-info btn-round shadow" onClick={loginClick}>
              {username ? username : "登录"}
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <ModalBasic
        show={show}
        title='退出登录'
        content='是否确认退出登录'
        handleClose={handleClose}
        closeText="退出登录"
        handleConfirm={handleConfirm}
      ></ModalBasic>
    </>
  );
};

export default NavBar;
