const { Shape, Font, User, ImagePalette } = require("../models");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");
const request = require("request");

class MainService {
  async getAllFonts() {
    const fonts = await Font.findAll();

    if (fonts.length == 0) {
      return [];
    }

    return fonts.map((font) => {
      return font.dataValues;
    });
  }

  async getAllShapes() {
    const shapes = await Shape.findAll();

    if (shapes.length == 0) {
      return [];
    }

    return shapes.map((shape) => {
      return shape.dataValues;
    });
  }

  async getAllPalettes() {
    const palettes = await ImagePalette.findAll();

    if (palettes.length == 0) {
      return [];
    }

    return palettes.map((palette) => {
      return palette.dataValues;
    });
  }

  async getUserByEmail(email) {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return "";
    }

    return user.dataValues;
  }

  async createShape(type, file) {
    await Shape.create({ type: type, src: `/shapes/${file.filename}` });
  }

  async createFont(file) {
    await Font.create({
      name: file.filename.split(".")[0],
      src: `/fonts/${file.filename}`,
    });
  }

  async createPalette(file) {
    await ImagePalette.create({ src: `/palettes/${file.filename}` });
  }

  async getFontById(fontId) {
    const font = await Font.findOne({ where: { id: fontId } });

    if (!font) {
      return [];
    }

    return font.dataValues.src;
  }

  async getShapeById(shapeId) {
    const shape = await Shape.findOne({ where: { id: shapeId } });
    if (!shape) {
      return [];
    }

    return shape.dataValues.src;
  }

  async getPaletteById(paletteId) {
    const palette = await ImagePalette.findOne({ where: { id: paletteId } });

    if (!palette) {
      return [];
    }

    return palette.dataValues.src;
  }

  async deleteFontById(fontId) {
    const font = await Font.findOne({ where: { id: fontId } });

    if (!font) {
      return [];
    }

    fs.unlinkSync(path.join(path.resolve(), `/public${font.src}`));
    await font.destroy();

    return Font.findAll();
  }

  async deleteShapeById(shapeId) {
    const shape = await Shape.findOne({ where: { id: shapeId } });

    if (!shape) {
      return [];
    }

    fs.unlinkSync(path.join(path.resolve(), `/public${shape.src}`));
    await shape.destroy();

    return Shape.findAll();
  }

  async deletePaletteById(paletteId) {
    const palette = await ImagePalette.findOne({ where: { id: paletteId } });

    if (!palette) {
      return [];
    }

    fs.unlinkSync(path.join(path.resolve(), `/public${palette.src}`));
    await palette.destroy();

    return ImagePalette.findAll();
  }

  async updateShapeById(shapeId, shapeProp, value) {
    const shape = await Shape.findOne({ where: { id: shapeId } });

    if (!shape) {
      return [];
    }

    await shape.update({ [shapeProp]: value });

    return Shape.findAll();
  }

  async updateFontById(fontId, fontProp, value) {
    const font = await Font.findOne({ where: { id: fontId } });

    if (!font) {
      return [];
    }

    await font.update({ [fontProp]: value });

    return Font.findAll();
  }

  async sendData(postData) {
    const clientServerOptions = {
      uri: "http://127.0.0.1:5003/data",
      body: JSON.stringify(postData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(clientServerOptions, function (error, response) {});
  }
}

const mainService = new MainService();
module.exports = { mainService };
