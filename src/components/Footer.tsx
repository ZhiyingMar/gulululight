import "./Footer.css";
import github from "@/assets/image/github.svg";
import message from "@/assets/image/message.png";
import useContainerScroll from "@/utils/useContainerScroll";
const Footer = () => {
  const { scrollToAnchor} = useContainerScroll("");
  return (
    <div className="footer">
    
        <div className="img-object" onClick={()=>scrollToAnchor('new-message')}>
          <img
            
            src={message}
            width="70"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="写留言"
            alt=""
          />
        </div>

      <a
        className="mb-2 footer-item"
        href="https://github.com/ZhiyingMar/background-first"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="img-object rounded-circle shadow-lg img-footer "
          src={github}
          width="70"
          data-toggle="tooltip"
          data-placement="top"
          data-original-title="github跳转!"
          alt=""
        />
      </a>
    </div>
  );
};

export default Footer;
