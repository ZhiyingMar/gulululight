import { ListGroup, OverlayTrigger, Popover } from "react-bootstrap";
import { getList, deleteMessage, updateMessage } from "@/services/message";
import AlertBasic from "../tool/Alert";
import { useState,useEffect } from "react";
const Message = ({ id, content,date,username }: any) => {
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false);

  // 删除
  const deleteClick = () => {
    if(loading) return;
    setLoading(true);
    deleteMessage(id)
      .then((res) => {
        console.log("success");
        setLoading(false);
      })
      .catch((err) => {
        console.log("llll");
        
        setLoading(false);
        setError(err?.error);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  // 更新
  const updateClick = () => {
    if(loading) return;
    setLoading(true);
    updateMessage(id, { content })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.error);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };
  return (
    <>
      <div className="ms-2 me-auto w-100">
        <div className="d-flex justify-content-between w-100 fw-bold fs-4">
          <p>{username??'--'}</p>

          <OverlayTrigger
            placement="bottom"
            trigger="click"
            overlay={
              <Popover>
                <Popover.Body>
                  <p className="tool-cancel" onClick={deleteClick}>
                    <i className="iconfont-size iconfont ">&#xe650;</i> 删除
                  </p>
                  <p className="tool-edit mb-0" onClick={updateClick}>
                    <i className="iconfont-size iconfont ">&#xeabd;</i> 编辑
                  </p>
                </Popover.Body>
              </Popover>
            }
          >
            <i className="iconfont">&#xe65d;</i>
          </OverlayTrigger>
        </div>
        <p className="fw-light fs-6">{date}</p>
        <div className="fst-italic fs-5">{content}</div>
      </div>
      <AlertBasic show={!!error} content={error}></AlertBasic>
    </>
  );
};

const Messages = () => {
  
  
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const [loading,setLoading]=useState(false);
  const getMessage=()=>{
    if(loading) return;
    setLoading(true);
    getList({
      pageIndex:0,
      pageSize:10
    }).then((res:any)=>{
      setLoading(false);
      setList(res)
    }).catch((err) => {
      setLoading(false);
      setError(err?.error??'获取数据失败');
      setTimeout(() => {
        setError("");
      }, 2000);
    });
  }
  useEffect(()=>{
    getMessage()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>

<ListGroup as="ul">
      {list.map((value: any) => {
        return (
          <ListGroup.Item
            key={value?.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <Message {...value}></Message>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
    <AlertBasic show={!!error} content={error}></AlertBasic>
    </>

  );
};

export default Messages;
