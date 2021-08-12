let input = `5
3 1 4 3 2`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, str] = input;

const list = str.split(' ').map(Number);

list.sort((a, b) => a - b);

let sum = 0;
const sumList = [];

for (let i of list) {
  sum += i;
  sumList.push(sum);
}

console.log(sumList.reduce((acc, cur) => acc + cur, 0));
