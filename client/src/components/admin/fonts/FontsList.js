import Table from "react-bootstrap/Table";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { useFonts } from "../../../redux/actions/useFonts";

const FontsList = () => {
  const fonts = useSelector((state) => state.fonts);

  const { getAllFonts, deleteFontById } = useFonts();

  useEffect(() => {
    getAllFonts();
  }, []);

  {
    return fonts && fonts.length ? (
      <Table striped bordered hover variant="dark" className="overflow-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Font Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fonts.map((font) => (
            <tr key={Math.floor(Math.random() * 1000)}>
              <td>{font.id}</td>
              <td>{font.name}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => deleteFontById(font.id)}
                >
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <h5 className="m-4">Don't have any font</h5>
    );
  }
};

export default FontsList;
