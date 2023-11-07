const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");
const student = database.define(
  "student",
  {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
module.exports = student;
