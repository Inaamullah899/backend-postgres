const teacher = require("./schema/teacherSchema");
const student = require("./schema/studentSchema");
const user = require("./schema/userSchema");
const database = require("../common/dbconnection");
const db = require("../config");
user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
const models = database.models;

db.database = database;

module.exports = { database, models };
