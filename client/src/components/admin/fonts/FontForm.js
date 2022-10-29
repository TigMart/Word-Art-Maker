import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineLoading } from "react-icons/ai";
import { fonts } from "../../../api/font";
import { toast } from "react-toastify";

import { useFonts } from "../../../redux/actions/useFonts";

const FontForm = () => {
  const [loading, setLoading] = useState(false);
  const [font, setFont] = useState("");

  const { getAllFonts } = useFonts();

  const data = new FormData();
  data.append("font", font);

  const fontsHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fonts(data);
      res.status === 200 && setLoading(false);
      res.status === 200 && getAllFonts();
      toast.success(res.data.message);
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data);
    }
  };

  return (
    <Form autoComplete="off" onSubmit={fontsHandler} encType="multipart/form-data">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" onChange={(e) => setFont(e.target.files[0])} />
      </Form.Group>
      <Button variant="primary" type="submit" className="rounded">
        {loading ? <AiOutlineLoading /> : "Add"}
      </Button>
    </Form>
  );
};

export default FontForm;
