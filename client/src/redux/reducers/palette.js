export const palettesReducer = (state = [], action) => {
  if (action.type === "GET_ALL_PALETTES") {
    return [...action.payload.palettes];
  }
  if (action.type === "DELETE_PALETTE") {
    const palettes = state.filter(
      (palette) => "" + palette.id !== action.payload.paletteId
    );

    return [...palettes];
  }
  return state;
};
