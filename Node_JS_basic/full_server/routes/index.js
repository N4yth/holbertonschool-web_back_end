const AppController = require('../controllers/AppController');
const { StudentsController } = require('../controllers/StudentsController');

module.exports = async (app, databasePath) => {
  app.get('/', (req, res) => {
    res.send(AppController.getHomepage(req, res).message);
  });

  app.get('/students', async (req, res) => {
    const result = await StudentsController.getAllStudents(req, res, databasePath);
    res.send(result.message).status(result.status);
  });

  app.get('/students/:major', async (req, res) => {
    const result = await StudentsController.getAllStudentsByMajor(
      req, res, databasePath, req.params.major,
    );
    res.send(result.message).status(result.status);
  });
};
