/* eslint-disable no-underscore-dangle */
const { Curriculum } = require('../models');

module.exports = {
  createOne: (body) => new Curriculum(body),
  addCurriculum: (user, curriculum) => {
    user.curriculums.push(curriculum);
    return user.save();
  },
  readOne: (user, id) => {
    const curriculum = user.curriculums.id(id);
    if (curriculum.is_active === false) return undefined;
    return curriculum;
  },
  readAll: (user) => {
    // eslint-disable-next-line max-len
    const filteredCurriculum = user.curriculums.filter((curriculum) => curriculum.is_active === true);
    return filteredCurriculum;
  },
  updateOne: (id, user, body) => {
    const updatedCurriculums = user.curriculums.map((curriculum) => {
      if (curriculum._id.toString() === id) {
        const updatedCurriculum = Object.assign(curriculum, body);

        return updatedCurriculum;
      }
      return curriculum;
    });
    // eslint-disable-next-line no-param-reassign
    user.curriculums = updatedCurriculums;
    return user.save();
  },
};
