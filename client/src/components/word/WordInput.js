import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";

const WordInput = ({ text, type, name, placeholder, required }) => {
  const words = useSelector((state) => state.words);
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    word: "",
    editWord: "",
  });

  const onChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_WORD",
      payload: {
        id: Math.round(new Date().getTime() % 1000),
        word: value.word,
      },
    });
    setValue({ word: "" });
  };

  return (
    <Form autoComplete="off" className="mt-3" onSubmit={onSubmit}>
      <Row>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text>{text}</InputGroup.Text>
          <Form.Control
            value={value[name] || ""}
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
          />
        </InputGroup>
        <div className="d-grid gap-2">
          <Button className="rounded-4" type="submit" variant="primary" size="sm">
            Add
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default WordInput;
