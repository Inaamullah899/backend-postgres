const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");
const course = database.define(
  "course",
  {
    courseNmae: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creditHours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
module.exports = course;
