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
        entryYear: JoiDate.date().format('YYYY').raw().required(),
        endYear: Joi.string().required(),
        bachelorName: Joi.string().required(),
      })),
      workData: Joi.array().items(Joi.object().keys({
        workName: Joi.string().required(),
        entryYear: JoiDate.date().format('YYYY').raw().required(),
        endYear: Joi.string().required(),
        position: Joi.string().required(),
        workDescription: Joi.string().required(),
      })),
      knowledge: Joi.array().items(Joi.object().keys({
        concept: Joi.string().required(),
      })),
      courses: Joi.array().items(Joi.object().keys({
        academyName: Joi.string(),
        realizationYear: JoiDate.date().format('YYYY').raw(),
        curseName: Joi.string(),
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
        entryYear: JoiDate.date().format('YYYY').raw(),
        endYear: Joi.string(),
        bachelorName: Joi.string(),
      })),
      workData: Joi.array().items(Joi.object().keys({
        workName: Joi.string(),
        entryYear: JoiDate.date().format('YYYY').raw(),
        endYear: Joi.string(),
        position: Joi.string(),
        workDescription: Joi.string(),
      })),
      knowledge: Joi.array().items(Joi.object().keys({
        concept: Joi.string(),
      })),
      courses: Joi.array().items(Joi.object().keys({
        academyName: Joi.string(),
        realizationYear: JoiDate.date().format('YYYY').raw(),
        curseName: Joi.string(),
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
