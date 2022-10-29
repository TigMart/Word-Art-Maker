import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useShapes } from "../../redux/actions/useShapes";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useState } from "react";

const Shapes = () => {
  const shapes = useSelector((state) => state.shapes);
  const [value, setValue] = useState("all");
  const [radioValue, setRadioValue] = useState();
  const dispatch = useDispatch();

  const { getAllShape } = useShapes();

  useEffect(() => {
    getAllShape();
  }, []);

  const dropdownChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const filteredShapes = shapes.filter((shape) =>
    value === "all" ? shape : shape.type.toLowerCase() === value
  );
  const getShapeID = (id) => {
    dispatch({
      type: "SET_SHAPE_ID",
      payload: id,
    });
  };
  return (
    <div>
      <InputGroup size="sm" className="mb-3 mt-3 ">
        <InputGroup.Text>Filter by categories</InputGroup.Text>
        <Form.Select
          aria-label="Default select example"
          value={value}
          onChange={dropdownChangeHandler}
        >
          <option value="all">All</option>
          <option value="animal">Animal</option>
          <option value="cloud">Cloud</option>
          <option value="people">People</option>
          <option value="number">Numbers</option>
        </Form.Select>
      </InputGroup>

      <Container>
        <ButtonGroup>
          <Row className="shape-parent align-content-start overflow-hidden ">
            {shapes && shapes.length ? (
              filteredShapes.map((shape, idx) => {
                return (
                  <Col xs={4} md={4} key={shape.id}>
                    <ToggleButton
                      key={idx}
                      id={`shape-${idx}`}
                      type="radio"
                      variant="outline-light"
                      className={`${
                        radioValue === shape.id ? "choose" : ""
                      } box border`}
                      name="radio"
                      value={shape.id}
                      checked={radioValue === shape.id}
                      onChange={() => setRadioValue(shape.id)}
                      onClick={() => getShapeID(shape.id)}
                    >
                      <Image
                        src={`${process.env.REACT_APP_API}${shape.src}`}
                        alt="img"
                        width="100%"
                        height="100%"
                      />
                    </ToggleButton>
                  </Col>
                );
              })
            ) : (
              <></>
            )}
          </Row>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Shapes;
