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
      console.log("createUser");
      const { error, value } = userValidation.createUser.validate(req.body);
      console.log(error);
      if (error) {
        return res.send(error.details[0].message);
      }
      console.log(value);
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
};
