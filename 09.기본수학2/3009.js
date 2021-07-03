// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `5 5
5 7
7 5`
  .trim()
  .split('\n');

const v = [input[0].split(' '), input[1].split(' '), input[2].split(' ')];
const answer = [];

if (v[0][0] === v[1][0]) {
  answer.push(v[2][0]);
} else if (v[0][0] === v[2][0]) {
  answer.push(v[1][0]);
} else {
  answer.push(v[0][0]);
}

if (v[0][1] === v[1][1]) {
  answer.push(v[2][1]);
} else if (v[0][1] === v[2][1]) {
  answer.push(v[1][1]);
} else {
  answer.push(v[0][1]);
}

console.log(answer.join(' '));
