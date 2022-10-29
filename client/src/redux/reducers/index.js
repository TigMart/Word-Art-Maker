import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { dataReducer } from "./data";
import { fontsReducer } from "./fonts";
import { palettesReducer } from "./palette";
import { shapesReducer } from "./shapes";
import { wordReducer } from "./word";

const rootReducer = combineReducers({
  auth: authReducer,
  words: wordReducer,
  fonts: fontsReducer,
  shapes: shapesReducer,
  palettes: palettesReducer,
  data: dataReducer,
});

export default rootReducer;
