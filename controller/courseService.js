const { models } = require("../models");
module.exports = {
  getCourse: async () => {
    const course = await models.course.findAll({ include: models.user });
    return course;
  },
  createcourse: async (data) => {
    const course = await models.course.create(data);

    return course;
  },
};
