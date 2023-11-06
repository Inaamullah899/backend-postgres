const { models } = require("../models");

module.exports = {
  getUser: async () => {
    const user = await models.user.findAll();
    return user;
  },
  createUser: async (data) => {
    const user = await models.user.create(data);

    return user;
  },
  createStudent: async (data) => {
    const student = await models.student.create(data);

    return student;
  },
};
