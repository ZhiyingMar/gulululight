import { OverlayTrigger,Button,Tooltip } from "react-bootstrap";
// 定义string作为key类型
type Hover = Record<string, string>;
const HoverButton=({
    hoverText,
    buttonText
}:Hover)=>{
    const renderTooltip = (props:any) => (
        <Tooltip id="button-tooltip" {...props}>
          {hoverText}
        </Tooltip>
      );
    return (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="success">{buttonText}</Button>
        </OverlayTrigger>
      ); 
};

export default HoverButton;