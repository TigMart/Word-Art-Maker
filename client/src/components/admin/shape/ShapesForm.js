import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineLoading } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { shapes } from "../../../api/shape";

import { toast } from "react-toastify";
import { useShapes } from "../../../redux/actions/useShapes";

const ShapesForm = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [shape, setShape] = useState("");

  const { getAllShape } = useShapes();
  const data = new FormData();
  data.append("type", type);
  data.append("shape", shape);

  const shapeHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await shapes(data);
      res.status === 200 && setLoading(false);
      res.status === 200 && getAllShape();
      toast.success(res.data.message);
      setType("");
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  return (
    <Form autoComplete="off" onSubmit={shapeHandler} encType="multipart/form-data">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Type of shape</Form.Label>
        <Form.Control
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" onChange={(e) => setShape(e.target.files[0])} />
      </Form.Group>
      <Button disabled={!type} variant="primary" type="submit" className="rounded">
        {loading ? <AiOutlineLoading /> : "Add"}
      </Button>
    </Form>
  );
};

export default ShapesForm;
