import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import MyModal from "../shared/modal/MyModal";
import EditWordInput from "./EditWordInput";

const WordsList = () => {
  const words = useSelector((state) => state.words);

  return (
    <div>
      <ListGroup className="word-parent">
        <Table striped bordered hover size="sm" className="mt-4">
          <thead>
            <tr>
              <th>Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {words.words && words.words.length ? (
              words.words.map((word) => {
                return (
                  <tr key={word.id}>
                    <td className="max-width">
                      <div className="truncate">{word.word}</div>
                    </td>
                    <td className="d-flex justify-content-evenly ">
                      <MyModal
                        btnTitle="Edit"
                        icon={<i className="bi bi-pen"></i>}
                        modalHeading="Are you sure?"
                        variant="outline-warning"
                        modalText={
                          <EditWordInput
                            text="Edit Word"
                            type="text"
                            name="editWord"
                            id={word.id}
                            placeholder={word.word}
                          />
                        }
                      ></MyModal>
                      <MyModal
                        id={word.id}
                        btnName="Delete"
                        btnTitle="Delete"
                        icon={<i className="bi bi-trash"></i>}
                        modalText="Are you sure to continue ?"
                        variant="outline-danger"
                        modalHeading={`You are trying to delete "${word.word}" from your list `}
                      ></MyModal>
                    </td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      </ListGroup>
    </div>
  );
};

export default WordsList;
