var express = require("express");
var router = express.Router();
const controller = require("../controller/userController");

/* GET users listing. */
router.get("/", controller.getUsers);
router.post("/add", controller.createUser);
router.post("/addstudent", controller.createStudent);

module.exports = router;
