import { Button } from "react-bootstrap";
import {addMessage} from "@/services/message";
import {useState} from "react";
import AlertBasic from "@/components/tool/Alert"
const NewMessage = () => {
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);
  const [val,setVal]=useState('');
  const addNewMessage = (event: any) => {
    if(loading) return;
    setLoading(true);
    // 默认动作会，忽略其他操作，导致页面重新加载
    event.preventDefault();
    console.log(event.target.message.value);
    if(!event.target.message.value){
      setLoading(false);
      setError('请输入留言内容');
      setTimeout(()=>{
        setError('');
      },2000)
      return;
    }
    
    addMessage({
      content:event.target.message.value
    }).then(res=>{
      setVal('')
      setLoading(false);
      console.log(res);
    }).catch(err=>{
      setLoading(false);
      setError(err.error);
      setTimeout(()=>{
        setError('');
      },2000)
    })


  };
  const onChange=(event:any)=>{
    setVal(event.target.value)
  }
  return (
    <>
      <form className="w-100 pb-5" onSubmit={addNewMessage}>
        <h2 className="pb-4 text-center">📮留言在此哦～</h2>
        <textarea
          className="w-100 input-round p-3"
          placeholder="在此留言～"
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
      {error?<AlertBasic show={!!error} content={error} variant="danger"></AlertBasic>:''}
    </>
  );
};

export default NewMessage;
