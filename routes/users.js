var express = require("express");
var router = express.Router();
const controller = require("../controller/userController");
const studentcontroller = require("../controller/studentController");
const teachercontroller = require("../controller/teacherController");
const coursecontroller = require("../controller/courseController");

/* GET users listing. */
router.get("/", controller.getUsers);
router.post("/add", controller.createUser);
router.get("/student", studentcontroller.getStudent);
router.post("/addstudent", studentcontroller.createStudent);
router.get("/teacher", teachercontroller.getTeacher);
router.post("/addteacher", teachercontroller.createTeacher);
router.get("/course", coursecontroller.getCourse);
router.post("/addcourse", coursecontroller.createCourse);

module.exports = router;
