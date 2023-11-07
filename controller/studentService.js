const { models } = require("../models");
module.exports = {
  getStudent: async () => {
    const student = await models.student.findAll({ include: models.user });
    return student;
  },
  createStudent: async (data) => {
    const student = await models.student.create(data);

    return student;
  },
};
