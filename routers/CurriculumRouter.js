const express = require('express');

const router = express.Router();

const { CurriculumController } = require('../controllers');
const { CurriculumValidator } = require('../validators');

router.post('/users/:idUser/posts', CurriculumValidator.create, CurriculumController.create);
router.get('/users/:idUser/posts', CurriculumValidator.readAll, CurriculumController.readAll);
router.get('/users/:idUser/posts/:id', CurriculumValidator.readOne, CurriculumController.readOne);
router.patch('/users/:idUser/posts/:id', CurriculumValidator.updateOne, CurriculumController.updateOne);
router.delete('/users/:idUser/posts/:id', CurriculumValidator.deleteOne, CurriculumController.deleteOne);

module.exports = router;
