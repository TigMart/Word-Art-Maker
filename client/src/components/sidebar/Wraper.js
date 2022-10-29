import React from "react";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";

const Wraper = ({ props }) => {
  return (
    <Col sm={9} className="side-height rounded-3 overflow-scroll shadow ">
      <Tab.Content>
        {props.map((item, i) => {
          return (
            <Tab.Pane key={i} eventKey={item.name}>
              {item.component}
            </Tab.Pane>
          );
        })}
      </Tab.Content>
    </Col>
  );
};

export default Wraper;
