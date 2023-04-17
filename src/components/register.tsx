import { Form, Button } from "react-bootstrap";
import AlertBasic from "@/components/tool/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerServer } from "@/services/user";
import { loginServer } from "@/services/login";

import {validation} from "@/utils/common";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [variant, setVariant] = useState("danger");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();



  const register = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (loading) return;
    setLoading(true);

    registerServer({
      username: form.registerUsername.value,
      password: form.registerPassword.value,
    })
      .then((res) => {
        window.localStorage.setItem("loginData", JSON.stringify(res));
        setValidated(true);
        setVariant("success");
        setError("创建账号成功，留个言吧～");
        setLoading(false);
        login(form.registerUsername.value,form.registerPassword.value)
      })
      .catch((err: any) => {
        setVariant("danger");
        setError(err.error);
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  const login = (username: string, password: string) => {
    loginServer({
      username,
      password,
    })
      .then((res) => {
        validation(res);
        setError("");
        setLoading(false);
        setTimeout(() => {
          navigate("/");
          setError("");
        }, 2000);
      })
      .catch((err: any) => {
        setError(err.error);
        setLoading(false);
      });
  };
  return (
    <div className=" bg-primary d-md-flex h-md-100 align-items-center jumbotron jumbotron-lg jumbotron-fluid ">
      <Form
        className="ma bg-white border rounded p-5"
        validated={validated}
        onSubmit={register}
      >
        <h2 className="text-center pb-4">注册</h2>
        <Form.Group className="mb-3" controlId="registerUsername">
          <Form.Control type="text" placeholder="注册的用户名" required />
          <Form.Control.Feedback type="invalid">
            请输入要注册的用户名!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4" controlId="registerPassword">
          <Form.Control type="password" placeholder="密码" required />
          <Form.Control.Feedback type="invalid">
            请输入密码!
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button className="btn-info btn-round shadow" type="submit">
            创建用户
          </Button>
        </div>
      </Form>
      <AlertBasic show={!!error} content={error} variant={variant}></AlertBasic>
    </div>
  );
};

export default Register;
