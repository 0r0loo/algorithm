let input = `4 3
2 3 5 9
1 4 7`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [nmStr, str1, str2] = input;

const arr1 = str1.split(' ').map(Number);
const arr2 = str2.split(' ').map(Number);

console.log([...arr1, ...arr2].sort((a, b) => a - b).join(' '));
