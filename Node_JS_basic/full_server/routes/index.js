import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

module.exports = (app, databasePath) => {
  app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  app.get('/students', async (req, res) => {
    StudentsController.getAllStudents(req, res, databasePath);
  });

  app.get('/students/:major', async (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, databasePath);
  });
};
