import { OverlayTrigger, Popover, Container } from "react-bootstrap";
import { deleteMessage } from "@/services/message";
import AlertBasic from "../tool/Alert";
import ModalBasic from "../tool/Modal";
import NewMessage from "./NewMessage";
import { useState } from "react";
const MessageItem = ({ id, content, date, username }: any) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const [deleteShow,setDeleteShow]=useState(false);
    // 1.删除 2.编辑
    const [operate, setOperate] = useState(0);
  
    const hanldeShow = (op: number) => setOperate(op);
    const hanldeDeleteHide = () => setOperate(0);
  
    // 删除
    const deleteClick = () => {
      if (loading) return;
      setLoading(true);
      deleteMessage(id)
        .then((res) => {
          setLoading(false);
          hanldeDeleteHide();
        })
        .catch((err) => {
          setLoading(false);
          setError(err?.error);
          setTimeout(() => {
            setError("");
          }, 2000);
        });
    };
  
  
    return (
      <>
        <div className="ms-2 me-auto w-100">
          <div className="d-flex justify-content-between w-100 fw-bold fs-4">
            <p>{username ?? "--"}</p>
  
            <OverlayTrigger
              placement="bottom"
              trigger="click"
              rootCloseEvent="click"
              rootClose={true}
              overlay={
                <Popover>
                  <Popover.Body>
                    <p className="tool-cancel" onClick={() => hanldeShow(1)}>
                      <i className="iconfont-size iconfont ">&#xe650;</i> 删除
                    </p>
                    <p className="tool-edit mb-0" onClick={() => hanldeShow(2)}>
                      <i className="iconfont-size iconfont ">&#xeabd;</i> 编辑
                    </p>
                  </Popover.Body>
                </Popover>
              }
            >
              <i className="iconfont">&#xe65d;</i>
            </OverlayTrigger>
          </div>
          <p className="fw-light fs-6">{date?.split('.')?.[0]?.replace('T',' ')??'--'}</p>
          <div className="fst-italic fs-5">{content}</div>
        </div>
        <AlertBasic show={!!error} content={error}></AlertBasic>
        <ModalBasic
          show={!!operate}
          title={operate === 1 ? "删除留言" : "编辑留言"}
          content={operate === 1 ? "是否确认删除留言" : ""}
          handleClose={hanldeDeleteHide}
          closeText="确认"
          handleConfirm={deleteClick}
        >
          {operate === 2 && (
            <Container className="mt-4">
              <NewMessage isEdit={true} handleClose={hanldeDeleteHide} defaultContent={content} id={id}></NewMessage>
            </Container>
          )}
        </ModalBasic>
      </>
    );
  };

  export default MessageItem;