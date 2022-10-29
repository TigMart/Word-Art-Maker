import Words from "../word/Words";
import Shapes from "../shapes/Shapes";
import Fonts from "../fonts/Fonts";
import Palette from "../palette/Palette";
import ShapesAdmin from "../admin/shape/ShapesAdmin";
import FontsAdmin from "../admin/fonts/FontsAdmin";
import PaletteAdmin from "../admin/palette/PaletteAdmin";
import ShapesList from "../admin/shape/ShapesList";
import FontsList from "../admin/fonts/FontsList";
import PalettesList from "../admin/palette/PalettesList";

export const MENU = [
  { name: "Words", component: <Words /> },
  { name: "Shapes", component: <Shapes /> },
  { name: "Fonts", component: <Fonts /> },
  { name: "Color", component: <Palette /> },
];
export const ADMIN = [
  { name: "Shapes", component: <ShapesAdmin /> },
  { name: "Fonts", component: <FontsAdmin /> },
  { name: "Palette", component: <PaletteAdmin /> },
];

export const ADMINLIST = [
  { name: "Shapes", component: <ShapesList /> },
  { name: "Fonts", component: <FontsList /> },
  { name: "Palette", component: <PalettesList /> },
];
