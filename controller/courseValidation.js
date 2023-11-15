const joi = require("joi");
module.exports = {
  createCourse: joi.object().keys({
    courseName: joi.string().required(),
    description: joi.string().required(),
  }),
};
