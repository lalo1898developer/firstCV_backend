const { UserService, CurriculumService } = require('../service');

module.exports = {
  create: async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
      const user = await UserService.readOne(idUser);
      const curriculum = await CurriculumService.createOne(body);
      const userWithCurriculum = await CurriculumService.addCurriculum(user, curriculum);
      res.status(201).json(userWithCurriculum);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  readAll: async (req, res) => {
    const { idUser } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      const curriculum = await CurriculumService.readAll(user);
      res.status(200).json(curriculum);
    } catch (err) {
      res.status(400).json({ message: 'Error getting user curriculums', err });
    }
  },
  readOne: async (req, res) => {
    const { idUser, id } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      const curriculum = await CurriculumService.readOne(user, id);
      if (!curriculum) res.status(404).json({ message: 'Curriculum not found' });
      res.status(200).json(curriculum);
    } catch (err) {
      res.status(400).json({ message: 'Error getting user curriculum by id', err });
    }
  },
  updateOne: async (req, res) => {
    const { idUser, id } = req.params;
    const { body } = req;
    try {
      const user = await UserService.readOne(idUser);
      if (!user) res.status(404).json({ message: 'User not found' });

      const curriculum = await CurriculumService.readOne(user, id);
      if (!curriculum) res.status(404).json({ message: 'Curriculum not found' });

      const updatedUser = await CurriculumService.updateOne(id, user, body);

      res.status(200).json(updatedUser.curriculums.id(id));
    } catch (err) {
      res.status(400).json({ message: 'Error getting user curriculum by id', err });
    }
  },
  deleteOne: async (req, res) => {
    const { idUser, id } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      if (!user) res.status(404).json({ message: 'User not found' });

      const post = await CurriculumService.readOne(user, id);
      if (!post) res.status(404).json({ message: 'Curriculum not found' });

      await CurriculumService.updateOne(id, user, { is_active: false });
      res.status(204).json();
    } catch (err) {
      res.status(400).json({ message: 'Error getting user curriculum by id', err });
    }
  },
};
