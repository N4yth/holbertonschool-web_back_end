import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res, databasePath) {
    let message = 'This is the list of our students';
    readDatabase(databasePath)
      .then((students) => {
        for (const [key] of Object.entries(students).sort()) {
          message += `\nNumber of students in ${[key]}: ${students[key].length}. List: ${students[key].join(', ')}`;
        }
        res.status(200).send(message);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res, databasePath) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databasePath)
      .then((students) => {
        res.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
