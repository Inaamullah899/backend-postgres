var express = require("express");
var router = express.Router();
const controller = require("../controller/userController");
const studentcontroller = require("../controller/studentController");

/* GET users listing. */
router.get("/", controller.getUsers);
router.post("/add", controller.createUser);
router.get("/student", studentcontroller.getStudent);
router.post("/addstudent", studentcontroller.createStudent);

module.exports = router;
