import React from "react";
import ActionButtons from "./ActionButtons";
import WordsList from "./WordsList";
import WordInput from "./WordInput";

const Words = () => {
  return (
    <>
      <WordInput
        text="Word"
        type="text"
        name="word"
        placeholder="Type in a new word"
        required={true}
      />

      <ActionButtons />
      <WordsList />
    </>
  );
};

export default Words;
