const { mainService } = require("../services/main-service");
const fs = require("fs");

async function getByUrl(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.sendFile(req.url);
}

async function getFonts(req, res) {
  const fonts = await mainService.getAllFonts();
  const filteredFonts = fonts.map((font) => {
    return {
      id: font.id,
      src: font.src,
      name: font.name,
    };
  });
  return res.send(filteredFonts);
}

async function getShapes(req, res) {
  const shapes = await mainService.getAllShapes();
  const filteredShapes = shapes.map((shape) => {
    return {
      id: shape.id,
      type: shape.type,
      src: shape.src,
    };
  });

  return res.send(filteredShapes);
}

async function getPalettes(req, res) {
  const palettes = await mainService.getAllPalettes();

  const filteredPalettes = palettes.map((palette) => {
    return {
      id: palette.id,
      src: palette.src,
    };
  });

  return res.send(filteredPalettes);
}

async function postFonts(req, res) {
  const fontFile = req.file;

  if (!fontFile) {
    return res.send({
      succes: true,
      message: "There is no data from the field or file",
    });
  }

  await mainService.createFont(fontFile);

  return res.send({ message: "succesfuly added" });
}

async function postShapes(req, res) {
  const shapeType = req.body.type || "";
  const shapeFile = req.file || "";

  if (!req.body.type) {
    fs.unlinkSync(req.file.path);
  }

  if (!shapeType || !shapeFile) {
    return res.send({
      succes: true,
      message: "There is no data from the field or file",
    });
  }

  await mainService.createShape(shapeType, shapeFile);

  return res.send({ message: "succesfuly added" });
}

async function postPalettes(req, res) {
  const file = req.file || "";

  if (!req.file) {
    return res.send({
      succes: true,
      message: "There is no data from the field or file",
    });
  }

  await mainService.createPalette(file);

  return res.send({ message: "succesfuly added" });
}

async function deleteFont(req, res) {
  const fontId = req.params.id;

  await mainService.deleteFontById(fontId);

  return res.send({ message: "succesfuly deleted", id: fontId });
}

async function deleteShape(req, res) {
  const shapeId = req.params.id;

  await mainService.deleteShapeById(shapeId);

  return res.send({ message: "succesfuly deleted", id: shapeId });
}

async function deletePalette(req, res) {
  const paletteId = req.params.id;

  await mainService.deletePaletteById(paletteId);

  return res.send({ message: "succesfuly deleted", id: paletteId });
}

async function updateFont(req, res) {
  const fontId = req.params.id;
  const props = req.body.props;
  const value = req.body.value;

  await mainService.updateFontById(fontId, props, value);

  return res.send({ message: "succesfuly updated" });
}

async function postData(req, res) {
  const { shapeId, fontsId, paletteId } = req.body.data;
  console.log(fontsId);
  const data = {
    data: {
      shape: `http://127.0.0.1:${process.env.PORT}${await mainService.getShapeById(
        shapeId
      )}`,
      font: `../public${await mainService.getFontById(fontsId)}`,
      palette: `http://127.0.0.1:${
        process.env.PORT
      }${await mainService.getPaletteById(paletteId)}`,
    },
    words: req.body.words,
  };

  await mainService.sendData(data);
  return res.send({ message: "succesfuly added" });
}

module.exports = {
  getFonts,
  getByUrl,
  getShapes,
  getPalettes,
  postShapes,
  postFonts,
  postPalettes,
  deleteFont,
  deleteShape,
  deletePalette,
  updateFont,
  postData,
};
