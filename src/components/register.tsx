import {Form, Button } from "react-bootstrap";
const Register = () => {
  return (
    <div className=" bg-primary d-md-flex h-md-100 align-items-center jumbotron jumbotron-lg jumbotron-fluid ">
       <Form className="ma bg-white border rounded p-5">
          <h2 className="text-center pb-4">注册</h2>
          <Form.Group className="mb-3" controlId="registerUsername">
            <Form.Control  type="text" placeholder="注册的用户名" required />
            <Form.Control.Feedback type="invalid">请输入要注册的用户名!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" controlId="registerPassword">
            <Form.Control  type="password" placeholder="密码" required />
            <Form.Control.Feedback type="invalid">请输入密码!</Form.Control.Feedback>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button  className="btn-info btn-round shadow"  type="submit">
              创建用户
            </Button>
          </div>
        </Form>
    </div>
    
  );
};

export default Register;
