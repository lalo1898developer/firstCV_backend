/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const curriculumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  academicData: [{
    type: Object,
    required: true,
  }],
  workData: [{
    type: Object,
    required: true,
  }],
  knowledge: [{
    type: Object,
    required: true,
  }],
  courses: [{
    type: Object,
    required: false,
  }],
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);

module.exports = { Curriculum, curriculumSchema };
