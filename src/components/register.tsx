import { Form, Button } from "react-bootstrap";
const Register = () => {
  return (
     <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>用户名</Form.Label>
            <Form.Control  type="text" placeholder="请输入用户名" required />
            <Form.Control.Feedback type="invalid">请输入用户名!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>密码</Form.Label>
            <Form.Control  type="password" placeholder="请输入密码" required />
            <Form.Control.Feedback type="invalid">请输入密码!</Form.Control.Feedback>
          </Form.Group>
          <br />
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              注册
            </Button>
          </div>
        </Form>
  );
};

export default Register;
