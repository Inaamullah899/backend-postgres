const joi = require("joi");
module.exports = {
  createTeacher: joi.object().keys({
    userID: joi.number().required(),
    experience: joi.string().required(),
    specilization: joi.string().required(),
  }),
};
