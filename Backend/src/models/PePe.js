const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

// PePe model definition
const PePe = sequelize.define('PePe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PePe;
