import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import MyModal from "../shared/modal/MyModal";
import { useSelector, useDispatch } from "react-redux";

const ActionButtons = () => {
  const words = useSelector((state) => state.words);

  const dispatch = useDispatch();

  const onCapitalize = () => {
    const capitalizedWords = words.words.map((item) => {
      return {
        id: item.id,
        word: `${item.word[0].toUpperCase()}${item.word.slice(1).toLowerCase()}`,
      };
    });
    dispatch({
      type: "TO_CAPITALIZE",
      payload: {
        capitalizedWords,
      },
    });
  };

  const onUpper = () => {
    const upperWords = words.words.map((item) => {
      return { id: item.id, word: item.word.toUpperCase() };
    });
    dispatch({
      type: "TO_UPPER",
      payload: {
        upperWords,
      },
    });
  };

  const onLower = () => {
    const lowerWords = words.words.map((item) => {
      return { id: item.id, word: item.word.toLowerCase() };
    });
    dispatch({
      type: "TO_LOWER",
      payload: {
        lowerWords,
      },
    });
  };

  return (
    <div className="mt-4">
      <ButtonGroup size="sm" className="w-100">
        <Button variant="secondary" onClick={onUpper}>
          Upper
        </Button>
        <Button variant="secondary" onClick={onLower}>
          Lower
        </Button>
        <Button variant="secondary" onClick={onCapitalize}>
          Capitalize
        </Button>
        <MyModal
          btnName="Clear All"
          btnTitle="Clear All"
          icon={<i className="bi bi-trash"></i>}
          modalText="Are you sure to continue ?"
          variant="outline-danger"
          modalHeading={`You are trying to delete your words list `}
        >
          <Button size="sm" variant="outline-danger">
            Clear All
          </Button>
        </MyModal>
      </ButtonGroup>
    </div>
  );
};

export default ActionButtons;
