import { Button } from "react-bootstrap";
const NewMessage = () => {
    const addNewMessage=(event:any)=>{
        // 默认动作会，忽略其他操作，导致页面重新加载
        event.preventDefault();
        console.log(event.target.message.value);
        
    }
  return (
    <form className="w-100 pb-5" onSubmit={addNewMessage}>
      <h2 className="pb-4 text-center">📮留言在此哦～</h2>
      <textarea className="w-100 input-round p-3"  placeholder="在此留言～" name="message"/>
      <div className="mt-3 d-flex flex-row-reverse d-grid gap-2">
        <Button className="btn-info btn-round shadow" type="submit">发 送</Button>
      </div>
    </form>
  );
};

export default NewMessage;
