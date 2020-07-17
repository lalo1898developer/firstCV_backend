const express = require('express');

const router = express.Router();

const { CurriculumController } = require('../controllers');
const { CurriculumValidator } = require('../validators');

router.post('/users/:idUser/curriculums', CurriculumValidator.create, CurriculumController.create);
router.get('/users/:idUser/curriculums', CurriculumValidator.readAll, CurriculumController.readAll);
router.get('/users/:idUser/curriculums/:id', CurriculumValidator.readOne, CurriculumController.readOne);
router.patch('/users/:idUser/curriculums/:id', CurriculumValidator.updateOne, CurriculumController.updateOne);
router.delete('/users/:idUser/curriculums/:id', CurriculumValidator.deleteOne, CurriculumController.deleteOne);

module.exports = router;
