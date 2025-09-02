import { promises as fs } from 'fs';

function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      let start = true;
      const nbStudentCS = [];
      const nbStudentSWE = [];
      const rows = data.split('\n');
      rows.forEach((row) => {
        const columns = row.split(',');
        if (!start && row !== '') {
          if (columns[3] === 'CS') {
            nbStudentCS.push(columns[0]);
          } else {
            nbStudentSWE.push(columns[0]);
          }
        }
        start = false;
      });
      return {
        CS: nbStudentCS,
        SWE: nbStudentSWE,
      };
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = readDatabase;
