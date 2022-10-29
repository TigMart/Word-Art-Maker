import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";

const EditWordInput = ({ text, type, name, id, placeholder }) => {
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

  const onEditSubmit = (e, id) => {
    e.preventDefault();
    let editedWord = words.words.map((elem) => {
      return elem.id === id
        ? {
            id: Math.round(new Date().getTime() % 1000),
            word: value.editWord,
          }
        : {
            ...elem,
          };
    });
    dispatch({
      type: "ON_EDIT",
      payload: {
        editedWord,
      },
    });
    setValue({ word: "", editWord: "" });
  };

  return (
    <Form autoComplete="off" className="mt-3" onSubmit={(e) => onEditSubmit(e, id)}>
      <Row>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text>{text}</InputGroup.Text>
          <Form.Control
            value={value.editWord || ""}
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </InputGroup>
        <div className="d-grid gap-2">
          <Button className="rounded-4" type="submit" variant="primary" size="sm">
            Save
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default EditWordInput;
