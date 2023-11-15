const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");
const course = database.define(
  "course",
  {
    courseID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
module.exports = course;
