import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

module.exports = (app) => {
  app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  app.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
  });

  app.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
  });
};
