export const fontsReducer = (state = [], action) => {
  if (action.type === "GET_ALL_FONTS") {
    return [...action.payload.fonts];
  }
  if (action.type === "DELETE_FONT") {
    const fonts = state.filter((font) => "" + font.id !== action.payload.fontId);
    return [...fonts];
  }
  return state;
};
