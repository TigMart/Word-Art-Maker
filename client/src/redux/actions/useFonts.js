import { deleteFont, getFonts } from "../../api/font";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const useFonts = () => {
  const dispatch = useDispatch();

  const getAllFonts = async () => {
    try {
      const response = await getFonts();
      if (response.data) {
        dispatch({
          type: "GET_ALL_FONTS",
          payload: {
            fonts: response.data,
          },
        });
      }
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  const deleteFontById = async (id) => {
    try {
      const response = await deleteFont(id);
      if (response.data) {
        dispatch({
          type: "DELETE_FONT",
          payload: {
            fontId: response.data.id,
          },
        });
      }
      toast.success(response.data.message);
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  return {
    getAllFonts,
    deleteFontById,
  };
};
