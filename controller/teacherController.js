const Express = require("express");
const teacherValidation = require("./teacherValidation");
const teacherService = require("./teacherService");
module.exports = {
  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },
  createTeacher: async (req, res) => {
    try {
      const { error, value } = teacherValidation.createTeacher.validate(
        req.body
      );

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await teacherService.createTeacher(value);
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
