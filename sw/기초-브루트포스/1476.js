// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

let input = `1 16 16`.split(' ');

let i = 1;

while (true) {
  if (
    (i % 15 || 15) === +input[0] &&
    (i % 28 || 28) === +input[1] &&
    (i % 19 || 19) === +input[2]
  ) {
    console.log(i);
    break;
  } else {
    i++;
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input = line.split(' ').map(Number);
}).on('close', function () {
  let i = 1;

  while (true) {
    if (
      (i % 15 || 15) === input[0] &&
      (i % 28 || 28) === input[1] &&
      (i % 19 || 19) === input[2]
    ) {
      console.log(i);
      break;
    } else {
      i++;
    }
  }
});
