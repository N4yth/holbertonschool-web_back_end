const fs = require('fs').promises;

function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      let start = true;
      const allstudents = [];
      const rows = data.split('\n');
      rows.forEach((row) => {
        const columns = row.split(',');
        if (!start && row !== '') {
          allstudents.push(columns);
        }
        start = false;
      });
      return allstudents;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = readDatabase;
