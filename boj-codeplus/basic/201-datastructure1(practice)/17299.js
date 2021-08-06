let input = `7
1 1 2 3 4 2 1`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, str] = input;
n = +n;
const arr = str.split(' ').map(Number);

console.log(arr);

const map1 = new Map();

arr.forEach((num) => {
  if (map1.has(num)) {
    map1.set(num, map1.get(num) + 1);
  } else {
    map1.set(num, 1);
  }
});

console.log(map1);

arr.forEach((num) => {});
