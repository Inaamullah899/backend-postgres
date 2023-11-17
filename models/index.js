const teacher = require("./schema/teacherSchema");
const student = require("./schema/studentSchema");
const user = require("./schema/userSchema");
const database = require("../common/dbconnection");
const course = require("./schema/courseSchema");
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
student.belongsToMany(course, {
  through: "student_course",
  foreignKey: "studentID",
});
course.belongsToMany(student, {
  through: "student_course",
  foreignKey: "courseID",
});
teacher.belongsToMany(course, {
  through: "teacher_course",
  foreignKey: "teacherID",
});
course.belongsToMany(teacher, {
  through: "teacher_course",
  foreignKey: "courseID",
});
const models = database.models;

module.exports = { database, models };
