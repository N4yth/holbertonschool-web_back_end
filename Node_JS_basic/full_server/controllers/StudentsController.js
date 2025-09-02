import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response, databasePath) {
    try {
      let message = 'This is the list of our students';
      const students = await readDatabase(databasePath);
      for (const [key] of Object.entries(students).sort()) {
        message += `\nNumber of students in ${[key]}: ${students[key].length}. List: ${students[key].join(', ')}`;
      }
      return {
        message,
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

export default StudentsController;
