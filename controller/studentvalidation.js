const joi = require("joi");
module.exports = {
  createStudent: joi.object().keys({
    userID: joi.number().required(),
    age: joi.number().required(),
    departement: joi.string().required(),
  }),
};
