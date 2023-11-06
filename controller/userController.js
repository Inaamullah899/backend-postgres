const Express = require("express");
const userValidation = require("./userValidation");
const userService = require("../service/userService");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUser();
    res.send(data);
  },
  createUser: async (req, res) => {
    try {
      const { error, value } = userValidation.createUser.validate(req.body);

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await userService.createUser(value);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
  createStudent: async (req, res) => {
    const data = await userService.createStudent();
    res.send(data);
  },
};
