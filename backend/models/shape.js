"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shape extends Model {
    static associate(models) {}
  }
  Shape.init(
    {
      type: DataTypes.STRING,
      src: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "shapes",
    }
  );
  return Shape;
};
