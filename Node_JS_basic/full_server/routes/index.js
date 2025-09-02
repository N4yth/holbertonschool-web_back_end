import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

module.exports = (app, databasePath) => {
  app.get('/', (req, res) => {
    const result = AppController.getHomepage(req, res);
    res.status(result.status).send(result.message);
  });

  app.get('/students', async (req, res) => {
    const result = await StudentsController.getAllStudents(req, res, databasePath);
    res.status(result.status).send(result.message);
  });

  app.get('/students/:major', async (req, res) => {
    const result = await StudentsController.getAllStudentsByMajor(
      req, res, databasePath, req.params.major,
    );
    res.status(result.status).send(result.message);
  });
};
