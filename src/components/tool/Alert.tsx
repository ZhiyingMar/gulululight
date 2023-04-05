import { Alert } from "react-bootstrap";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import AOS from "aos";
const AlertBasic = ({ show, variant,content }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);
  return (
    <>
      {createPortal(
        <Alert
          className="position-fixed alert-position"
          show={show}
          variant={variant??'danger'}
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
        >
          {content}
        </Alert>,
        document.body
      )}
    </>
  );
};
export default AlertBasic;
