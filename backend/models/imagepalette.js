"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImagePalette extends Model {
    static associate(models) {}
  }
  ImagePalette.init(
    {
      src: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "image_palettes",
    }
  );
  return ImagePalette;
};
