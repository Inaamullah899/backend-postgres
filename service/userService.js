const bcrypt = require("bcryptjs");
const { models } = require("../models");

module.exports = {
  getUser: async () => {
    const user = await models.user.findAll();
    return user;
  },
  createUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const user = await models.user.create(data);

    return user;
  },
};
