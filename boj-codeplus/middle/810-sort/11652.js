// FAIL
let input = `6
1
2
1
2
1
2`
  .trim()
  .split('\n')
  .map(BigInt);
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let [n, ...tc] = input;
const map1 = new Map();

for (let i of tc) {
  if (map1.has(i)) {
    map1.set(i, map1.get(i) + BigInt(1));
  } else {
    map1.set(i, BigInt(1));
  }
}

const sortArr = [...map1.entries()].sort((a, b) => {
  if (a[1] > b[1]) {
    return -1;
  } else if (a[1] < b[1]) {
    return 1;
  } else if (a[1] === b[1]) {
    return a[0] - b[0];
  }
});
console.log(sortArr[0][0]);
