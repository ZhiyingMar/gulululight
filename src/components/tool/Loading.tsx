import Spinner from "react-bootstrap/Spinner";
import { createPortal } from "react-dom";

const Loading = () => {
  return (
    <>
      {createPortal(<Spinner animation="border" role="status" variant="warning">
      </Spinner>, document.body)}
    </>
  );
};

export default Loading;
