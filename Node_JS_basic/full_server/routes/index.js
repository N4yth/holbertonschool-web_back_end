import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const routes = express.Router();

routes.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

routes.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

routes.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

export default routes;
