const initialState = {
  words: [],
};

export const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WORD":
      return {
        words: [...state.words, { ...action.payload }],
      };
    case "ON_EDIT":
      return {
        words: action.payload.editedWord,
      };
    case "TO_UPPER":
      return {
        words: action.payload.upperWords,
      };
    case "TO_LOWER":
      return {
        words: action.payload.lowerWords,
      };
    case "TO_CAPITALIZE":
      return {
        words: action.payload.capitalizedWords,
      };
    case "DELETE_ALL":
      return {
        words: action.payload.deleted,
      };
    case "TO_DELETE":
      return {
        words: action.payload.words,
      };
    case "ADD_SHAPE":
      return {
        shapeId: action.payload.id,
      };
    default:
      return state;
  }
};
