import { Container, Row, Col,ListGroup } from "react-bootstrap";
import Message from "./Message/Message";
import "./Mine.css"
const Mine = () => {
  return (
    <Container className="mine-container">
    <Row>
      <Col xs={4}>
      <ListGroup as="ul">
      <ListGroup.Item as="li" variant="info">
        个人主页
      </ListGroup.Item>
      <ListGroup.Item as="li">我的留言</ListGroup.Item>
    </ListGroup>
      </Col>
      <Col xs={8}>
        <Message></Message>
      </Col>
    </Row>
    </Container>
  );
};

export default Mine;
