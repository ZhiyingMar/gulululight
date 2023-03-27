import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Message from "./Message/Message";
import "./Home.css";
import { useState } from "react";
const Home = () => {
    const [active,setActive]=useState(0)
    const change=(type:number)=>{
        setActive(type);
    }
  return (
    <Container className="mine-container">
      <Row>
        <Col xs={4} >
          <ListGroup as="ul">
            <ListGroup.Item as="li" active={active===0} onClick={()=>change(0)}>
              留言板
            </ListGroup.Item>
            <ListGroup.Item as="li" active={active===1} onClick={()=>change(1)}>我的留言</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} >
          <Message></Message>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
