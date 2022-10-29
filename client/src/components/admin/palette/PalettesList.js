import React, { useEffect } from "react";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import { useSelector } from "react-redux";
import { usePalettes } from "../../../redux/actions/usePalettes";

const PalettesList = () => {
  const palettes = useSelector((state) => state.palettes);
  console.log(palettes)
  const { getAllPalettes, deletePaletteById } = usePalettes();

  useEffect(() => {
    getAllPalettes();
  }, []);

  {
    return palettes && palettes.length ? (
      <Table striped bordered hover variant="dark" className="overflow-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {palettes.map((palette) => (
            <tr key={Math.floor(Math.random() * 1000)}>
              <td>{palette.id}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_API}${palette.src}`}
                  alt={palette.id}
                  width={50}
                  height={50}
                />
              </td>
              <td>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => deletePaletteById(palette.id)}
                >
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <h5 className="m-4">Don't have any palettes</h5>
    );
  }
};

export default PalettesList;
