/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const curriculumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  personal_information: {
    type: Object,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
  academic: {
    type: Object,
    required: true,
  },
  work_experience: {
    type: Object,
    required: true,
  },
  knowledge: {
    type: Array,
    required: false,
  },
  courses: {
    type: Object,
    required: false,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);

module.exports = { Curriculum, curriculumSchema };
