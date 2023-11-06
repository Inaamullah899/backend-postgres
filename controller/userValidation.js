const joi = require("joi");
module.exports = {
  createUser: joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  createStudent: joi.object().keys({
    userID: joi.integer().required(),
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
};
