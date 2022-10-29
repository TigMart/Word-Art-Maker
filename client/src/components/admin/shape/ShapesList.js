import React, { useEffect } from "react";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useShapes } from "../../../redux/actions/useShapes";

const ShapesList = () => {
  const shapes = useSelector((state) => state.shapes);
  const { getAllShape, deleteShapeById } = useShapes();
  useEffect(() => {
    getAllShape();
  }, []);

  {
    return shapes && shapes.length ? (
      <Table striped bordered hover variant="dark" className="overflow-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Type of shape</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shapes.map((shape) => (
            <tr key={Math.floor(Math.random() * 1000)}>
              <td>{shape.id}</td>
              <td>{shape.type}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_API}${shape.src}`}
                  alt={shape.type}
                  width={50}
                  height={50}
                />
              </td>
              <td>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => deleteShapeById(shape.id)}
                >
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <h5 className="m-4">Don't have any shapes</h5>
    );
  }
};

export default ShapesList;
