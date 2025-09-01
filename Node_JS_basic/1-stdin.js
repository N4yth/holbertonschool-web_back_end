const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  rl.write(`Your name is ${name}!\n`);
  rl.close();
});

rl.on('close', () => {
  if (!process.stdin.setRawMode) {
    rl.write('This important software is now closing\n');
  }
});
