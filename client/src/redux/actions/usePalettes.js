import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deletePalette, getPalettes } from "../../api/palettes";

export const usePalettes = () => {
  const dispatch = useDispatch();

  const getAllPalettes = async () => {
    try {
      const response = await getPalettes();
      if (response.data) {
        dispatch({
          type: "GET_ALL_PALETTES",
          payload: {
            palettes: response.data,
          },
        });
      }
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };

  const deletePaletteById = async (id) => {
    try {
      const response = await deletePalette(id);
      if (response.data) {
        dispatch({
          type: "DELETE_PALETTE",
          payload: {
            paletteId: response.data.id,
          },
        });
      }
      toast.success(response.data.message);
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.message);
    }
  };
  return {
    getAllPalettes,
    deletePaletteById,
  };
};
