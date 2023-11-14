const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");
const teacher = database.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specilization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
module.exports = teacher;
