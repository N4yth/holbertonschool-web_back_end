import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, databasePath) {
    let message = 'This is the list of our students';
    readDatabase(databasePath)
      .then((students) => {
        for (const [key] of Object.entries(students).sort()) {
          message += `\nNumber of students in ${[key]}: ${students[key].length}. List: ${students[key].join(', ')}`;
        }
        response.status(200).send(message);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response, databasePath) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(databasePath)
      .then((students) => {
        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

export default StudentsController;
