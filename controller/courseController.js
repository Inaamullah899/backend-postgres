const Express = require("express");
const courseValidation = require("./courseValidation");
const courseService = require("./courseService");
module.exports = {
  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  createCourse: async (req, res) => {
    try {
      const { error, value } = courseValidation.createCourse.validate(req.body);

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await courseService.createcourse(value);
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
