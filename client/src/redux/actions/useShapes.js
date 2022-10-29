import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteShape, getShapes } from "../../api/shape";

export const useShapes = () => {
  const dispatch = useDispatch();

  const getAllShape = async () => {
    try {
      const response = await getShapes();
      if (response.data) {
        dispatch({
          type: "GET_ALL_SHAPES",
          payload: {
            shapes: response.data,
          },
        });
      }
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  const deleteShapeById = async (id) => {
    try {
      const response = await deleteShape(id);
      if (response.data) {
        dispatch({
          type: "DELETE_SHAPE",
          payload: {
            shapeId: response.data.id,
          },
        });
      }
      toast.success(response.data.message);
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  return {
    getAllShape,
    deleteShapeById,
  };
};
