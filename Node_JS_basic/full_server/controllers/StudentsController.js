import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response, databasePath) {
    try {
      const students = await readDatabase(databasePath);
      return {
        message: 'This is the list of our students\n'
          + `Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\n`
          + `Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`,
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
      return {
        message: `List: ${students[major].join(', ')}`,
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

module.exports = StudentsController;
