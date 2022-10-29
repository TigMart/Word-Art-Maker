'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Font extends Model {
    static associate(models) {
    }
  }
  Font.init({
    name: DataTypes.STRING,
    src: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'fonts',
  });
  return Font;
};