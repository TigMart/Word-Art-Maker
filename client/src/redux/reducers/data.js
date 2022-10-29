const initialState = {
  shapeId: null,
  fontsId: null,
  paletteId: null,
};

export const dataReducer = (state = initialState, action) => {
  if (action.type === "SET_SHAPE_ID") {
    return {
      ...state,
      shapeId: action.payload,
    };
  }
  if (action.type === "SET_FONT_ID") {
    return {
      ...state,
      fontsId: action.payload,
    };
  }
  if (action.type === "SET_PALETTE_ID") {
    return {
      ...state,
      paletteId: action.payload,
    };
  }
  return state;
};
