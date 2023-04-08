import { Modal, Button } from "react-bootstrap";

const ModalBasic = ({
  show,
  title,
  content,
  children,
  variantConfirm,
  closeText,
  handleConfirm,
  handleClose,
}: any) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {content && <Modal.Body>{content}</Modal.Body>}
        {children}
        {!children && (
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              关闭
            </Button>
            <Button
              variant={variantConfirm ?? "outline-danger"}
              onClick={handleConfirm}
            >
              {closeText}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};
export default ModalBasic;
