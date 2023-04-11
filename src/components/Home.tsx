import { Container, Row, Col } from "react-bootstrap";
import Footer from "@/components/Footer";
import Message from "./Message/Message";
import "./Home.css";
import NewMessage from "@/components/Message/NewMessage";
import { useEffect } from "react";
import AOS from "aos";
const Home = () => {
  // const [active, setActive] = useState(0);
  // const change = (type: number) => {
  //   setActive(type);
  // };
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <Container fluid className="home-container">
      {/* 头部展示 */}
      <div className="jumbotron jumbotron-lg jumbotron-fluid mb-3 bg-primary position-relative">
        <Container>
          <Row>
            <Col className="nav-color-bg display-3"> 留言板项目展示</Col>
          </Row>
          <Row>
            <Col className="nav-color-bg display-3">
              {" "}
              Message Board Project Display
            </Col>
          </Row>
        </Container>
      </div>
      {/* 底部新增留言 */}
      <Container data-aos="fade-down">
        <NewMessage />
      </Container>
      {/* className="mb-5" */}
      <Container className="mb-5"  data-aos="fade-down">
        <h2 className="pb-2">留言板</h2>
        <Row>
          <Col>
            <Message></Message>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
