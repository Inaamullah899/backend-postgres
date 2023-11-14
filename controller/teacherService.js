const { models } = require("../models");
module.exports = {
  getTeacher: async () => {
    const teacher = await models.teacher.findAll({ include: models.user });
    return teacher;
  },
  createTeacher: async (data) => {
    const teacher = await models.teacher.create(data);

    return teacher;
  },
};
