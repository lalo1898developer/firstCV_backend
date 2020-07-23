const { celebrate, Joi, Segments } = require('celebrate');
// eslint-disable-next-line import/no-extraneous-dependencies
const JoiDate = require('@hapi/joi')
  .extend(require('@hapi/joi-date'));

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      phone: Joi.string().required(),
      postalCode: Joi.string().required(),
      profile: Joi.string().required(),
      academicData: Joi.array().items(Joi.object().keys({
        schoolName: Joi.string().required(),
        entryDate: JoiDate.date().format('YYYY-MM-DD').raw().required(),
        endDate: JoiDate.date().format('YYYY-MM-DD').raw().allow(null),
        bachelorName: Joi.string().required(),
      })).min(1),
      workData: Joi.array().items(Joi.object().keys({
        workName: Joi.string().required(),
        entryDate: JoiDate.date().format('YYYY-MM-DD').raw().required(),
        endDate: JoiDate.date().format('YYYY-MM-DD').raw().allow(null),
        position: Joi.string().required(),
        workDescription: Joi.string().required(),
      })).min(1),
      knowledge: Joi.array().items(Joi.object().keys({
        concept: Joi.string().required(),
      })),
      courses: Joi.array().items(Joi.object().keys({
        academyName: Joi.string(),
        realizationDate: JoiDate.date().format('YYYY-MM-DD').raw(),
        courseName: Joi.string(),
      })),
    }),
  }),
  readAll: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
  }),
  readOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      id: Joi.string().required(),
    }),
  }),
  updateOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string(),
      phone: Joi.string(),
      postalCode: Joi.string(),
      profile: Joi.string(),
      academicData: Joi.array().items(Joi.object().keys({
        schoolName: Joi.string(),
        entryDate: JoiDate.date().format('YYYY-MM-DD').raw(),
        endDate: JoiDate.date().format('YYYY-MM-DD').raw().allow(null),
        bachelorName: Joi.string(),
      })),
      workData: Joi.array().items(Joi.object().keys({
        workName: Joi.string(),
        entryDate: JoiDate.date().format('YYYY-MM-DD').raw(),
        endDate: JoiDate.date().format('YYYY-MM-DD').raw().allow(null),
        position: Joi.string(),
        workDescription: Joi.string(),
      })),
      knowledge: Joi.array().items(Joi.object().keys({
        concept: Joi.string(),
      })),
      courses: Joi.array().items(Joi.object().keys({
        academyName: Joi.string(),
        realizationDate: JoiDate.date().format('YYYY-MM-DD').raw(),
        courseName: Joi.string(),
      })),
    }),
  }),
  deleteOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      id: Joi.string().required(),
    }),
  }),
};
