const teacher = require("./schema/teacherSchema");
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
const models = database.models;
console.log(models);

db.database = database;

module.exports = { database, models };
