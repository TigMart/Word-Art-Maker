import React, { memo } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

const Sidebar = ({props}) => {
  return (
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        {props.map((item, i) => {
          return (
            <Nav.Item key={i} className="wordart-tab mb-1">
              <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Col>
  );
};

export default memo(Sidebar);
