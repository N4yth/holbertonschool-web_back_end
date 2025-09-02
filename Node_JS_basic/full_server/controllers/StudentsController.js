const readDatabase = require('../utils');

const listName = (list) => list.map((element) => element[0]).join(', ');

class StudentsController {
  static async getAllStudents(request, response, databasePath) {
    try {
      const students = await readDatabase(databasePath);
      const nbStudentCS = [];
      const nbStudentSWE = [];
      students.forEach((student) => {
        if (student[3] === 'CS') {
          nbStudentCS.push(student);
        } else {
          nbStudentSWE.push(student);
        }
      });
      return {
        message: 'This is the list of our students\n'
          + `Number of students in CS: ${nbStudentCS.length}. List: ${listName(nbStudentCS)}\n`
          + `Number of students in SWE: ${nbStudentSWE.length}. List: ${listName(nbStudentSWE)}`,
        status: 200,
      };
    } catch (err) {
      return {
        message: err.message,
        status: 500,
      };
    }
  }

  static async getAllStudentsByMajor(request, response, databasePath, major) {
    try {
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      const students = await readDatabase(databasePath);
      const studentsList = [];
      students.forEach((student) => {
        if (student[3] === major) {
          studentsList.push(student);
        }
      });
      return {
        message: `List: ${listName(studentsList)}`,
        status: 200,
      };
    } catch (err) {
      return {
        message: err.message,
        status: 500,
      };
    }
  }
}

module.exports = { StudentsController, listName };
