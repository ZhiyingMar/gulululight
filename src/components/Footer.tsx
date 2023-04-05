import "./Footer.css";
import github from "@/assets/github.svg"
const Footer = () => {
  return (
    <div  className="footer">
        <a href="https://github.com/ZhiyingMar/background-first" target="_blank" rel="noreferrer noopener">
        <img className="rounded-circle shadow-lg img-footer" src={github} width="70" data-toggle="tooltip" data-placement="top"  data-original-title="github跳转!" alt=""/>
        </a>
    </div>
  );
};

export default Footer;
