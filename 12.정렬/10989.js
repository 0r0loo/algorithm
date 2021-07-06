// 이문제는 자바스크립트로 맞은사람이 0 이다 자바스크립트로는 못푸는 문제인듯....

let input = `10
5
2
3
1
4
2
3
5
1
7`
  .trim()
  .split('\n');

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, ...arr] = input;

const sortArr = arr.map((str) => +str).sort((a, b) => a - b);

console.log(sortArr.join('\n'));
