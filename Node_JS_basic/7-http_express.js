const http = require('http');
const app = require('express')();
const countStudents = require('./3-read_file_async');

http.createServer(app).listen(1245);
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

module.exports = app;
