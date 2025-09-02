import fs from 'fs';

function readDatabase(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(data);
    });
  });

  return promise.then((data) => {
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
  });
}

export default readDatabase;
