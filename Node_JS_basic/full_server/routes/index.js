import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

module.exports = async (app, databasePath) => {
  app.get('/', (req, res) => {
    res.status(result.status).send(AppController.getHomepage(req, res).message);
  });

  app.get('/students', async (req, res) => {
    const result = await StudentsController.getAllStudents(req, res, databasePath);
    res.status(result.status).send(result.message);
  });

  app.get('/students/:major', async (req, res) => {
    const result = await StudentsController.getAllStudentsByMajor(
      req, res, databasePath, req.params.major,
    );
    console.log(result)
    res.status(result.status).send(result.message);
  });
};
