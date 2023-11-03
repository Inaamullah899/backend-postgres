const { models } = require("../models");

module.exports = {
  getUser: async () => {
    const user = await models.user.findAll();
    return user;
  },
  createUser: async (data) => {
    console.log("ghghg");
    console.log(models.user);
    const user = await models.user.create(data);
    console.log(user);
    return user;
  },
};
