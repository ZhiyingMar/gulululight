import { ListGroup } from "react-bootstrap";
import NewMessage from "./NewMessage"
const Message = () => {
  return (
    <div className="ms-2 me-auto">
      <div className="fw-bold fs-4">用户姓名</div>
      <p className="fw-light fs-6">2023/03/04</p>
      <div className="fst-italic fs-5">这是内容展示</div>
    </div>
  );
};

const Messages = () => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Message></Message>
      </ListGroup.Item>
      
    </ListGroup>
  );
};

export default Messages;
