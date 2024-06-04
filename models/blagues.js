const { DataTypes } = require('sequelize');
const db = require('../db/database');

const Blague = db.define(
  'Blague',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = Blague;