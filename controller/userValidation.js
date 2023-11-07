const joi = require("joi");
module.exports = {
  // user CRUD operation validation
  createUser: joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  deleteUser: joi.object().keys({
    id: joi.string().required(),
  }),
  updateUser: joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  // student CRUD operation validation

  // course CRUD operation validation
  createcourse: joi.object().keys({
    id: joi.number().required(),
    courseName: joi.number().required(),
    creditHours: joi.number().required(),
  }),
};
