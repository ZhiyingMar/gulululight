import { Button } from "react-bootstrap";
const NewMessage = () => {
    const addNewMessage=(event:any)=>{
        // 默认动作会，忽略其他操作，导致页面重新加载
        event.preventDefault();
        console.log(event.target.message.value);
        
    }
  return (
    <form className="w-100" onSubmit={addNewMessage}>
      <textarea className="w-100" placeholder="在此留言～" name="message"/>
      <div className="mt-3 d-flex flex-row-reverse">
        <Button variant="outline-success" type="submit">发送</Button>
      </div>
    </form>
  );
};

export default NewMessage;
