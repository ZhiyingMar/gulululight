import "./Footer.css"
const Footer = () => {
  const footerStyle = {
    // 此处的position不能为全小写，
    // Position: "fixed",
    // bottom: 0,
    color: "grey",
    fontSize: 16,
  };
  return (
    <div style={footerStyle} className="footer">
      <br />
      <em>
        留言板的git地址:
        <a href="https://github.com/ZhiyingMar/background-first" target="_blank" rel="noreferrer">
          https://github.com/ZhiyingMar/background-first
        </a>
      </em>
    </div>
  );
};

export default Footer;
