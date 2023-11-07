const Express = require("express");
const studentValidation = require("./studentvalidation");
const studentService = require("./studentService");
module.exports = {
  getStudent: async (req, res) => {
    const data = await studentService.getStudent();
    res.send(data);
  },
  createStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.createStudent.validate(
        req.body
      );

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await studentService.createStudent(value);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
};
