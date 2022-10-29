import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineLoading } from "react-icons/ai";
import { palettes } from "../../../api/palettes";
import { toast } from "react-toastify";

import { usePalettes } from "../../../redux/actions/usePalettes";

const PaletteForm = () => {
  const [loading, setLoading] = useState(false);
  const [palette, setPalette] = useState("");

  const { getAllPalettes } = usePalettes();
  const data = new FormData();
  data.append("palette", palette);

  const palettesHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await palettes(data);
      res.status === 200 && setLoading(false);
      res.status === 200 && getAllPalettes();
      toast.success(res.data.message);
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  return (
    <Form
      autoComplete="off"
      onSubmit={palettesHandler}
      encType="multipart/form-data"
    >
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" onChange={(e) => setPalette(e.target.files[0])} />
      </Form.Group>
      <Button variant="primary" type="submit" className="rounded">
        {loading ? <AiOutlineLoading /> : "Add"}
      </Button>
    </Form>
  );
};

export default PaletteForm;
