export const shapesReducer = (state = [], action) => {
  if (action.type === "GET_ALL_SHAPES") {
    return [...action.payload.shapes];
  }
  if (action.type === "DELETE_SHAPE") {
    const shapes = state.filter((shape) => "" + shape.id !== action.payload.shapeId);

    return [...shapes];
  }
  return state;
};
