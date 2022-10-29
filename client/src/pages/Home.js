import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
// Components
import Draw from "../components/visualize/Draw";
import Sidebar from "../components/sidebar/Sidebar";
import Wraper from "../components/sidebar/Wraper";
import { MENU } from "../components/sidebar/const";

const Home = () => (
  <Container className="mt-3">
    <Row>
      <Col md={5}>
        <Tab.Container defaultActiveKey="Words">
          <Row>
            <Sidebar props={MENU} />
            <Wraper props={MENU} />
          </Row>
        </Tab.Container>
      </Col>
      <Col md={7}>
        <Draw />
      </Col>
    </Row>
  </Container>
);

export default Home;
