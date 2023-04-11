import { Button } from "react-bootstrap";
import { addMessage, updateMessage } from "@/services/message";
import { useEffect, useState } from "react";
import AlertBasic from "@/components/tool/Alert";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { assignmentName, selectContent } from "@/store/contenterSlice";
import eventBus from "@/utils/eventBus";
// import Login from "../Login";

const NewMessage = ({ isEdit, handleClose, id, defaultContent }: any) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState("");

  // const [login,setLogin]=useState(false);

  const content = useAppSelector(selectContent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setVal(defaultContent);
  }, [defaultContent]);

  useEffect(() => {
    !val && !defaultContent && setVal(content);
    // 这里数组只触发一次，不能添加任何值
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultContent]);

  useEffect(() => {
    return () => {
      dispatch(assignmentName(val));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  // 点击发送
  const addNewMessage = (event: any) => {
    if (loading) return;
    setLoading(true);
    // 默认动作会，忽略其他操作，导致页面重新加载
    event.preventDefault();
    console.log(event.target.message.value);
    if (!event.target.message.value) {
      setLoading(false);
      setError("请输入留言内容");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (isEdit) {
      update(event.target.message.value);
    } else {
      add(event.target.message.value);
    }
  };

  //  添加
  const add = (content: string) => {
    addMessage({
      content,
    })
      .then((res) => {
        setVal("");
        setLoading(false);
        eventBus.emit('refresh')
        dispatch(assignmentName(""));
      })
      .catch((err) => {
        setLoading(false);
        setError(err.error);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  // 更新
  const update = (content: string) => {
    updateMessage(id, { content: content ?? defaultContent })
      .then((res) => {
        setLoading(false);
        handleClose();
      })
      .catch((err) => {
        setLoading(false);
        setError(err.error);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };
  const onChange = (event: any) => {
    setVal(event.target.value);
  };
  return (
    <>
      <form id="new-message" className="w-100 pb-4" onSubmit={addNewMessage}>
        <h2
          style={{ display: `${isEdit ? "none" : "block"}` }}
          className="pb-4 text-center"
        >
          📮留言在此哦～
        </h2>
        <textarea
          className="w-100 input-round p-3"
          placeholder={isEdit ? "秀儿，改吧" : "在此留言～"}
          name="message"
          value={val}
          onChange={onChange}
        />
        <div className="mt-3 d-flex flex-row-reverse d-grid gap-2">
          <Button className="btn-info btn-round shadow" type="submit">
            发 送
          </Button>
        </div>
      </form>
      {error ? (
        <AlertBasic
          show={!!error}
          content={error}
          variant="danger"
        ></AlertBasic>
      ) : (
        ""
      )}
      {/* <Login show={login} onHide={()=>setLogin(false)}></Login> */}
    </>
  );
};

export default NewMessage;
