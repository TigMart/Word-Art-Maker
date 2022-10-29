import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { ADMIN, ADMINLIST } from "../components/sidebar/const";
import Wraper from "../components/sidebar/Wraper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";

const Admin = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Tab.Container defaultActiveKey="Shapes">
          <Col md={4}>
            <Row>
              <Sidebar props={ADMIN} />
              <Wraper props={ADMIN} />
            </Row>
          </Col>
          <Col md={8}>
            <Wraper props={ADMINLIST} />
          </Col>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default Admin;
