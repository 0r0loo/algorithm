let input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...list] = input;
list = list.map((list) => list.split(' ').map(Number));
const dp = [];
const t = [];
const p = [];
for (let arr of list) {
  t.push(arr[0]);
  p.push(arr[1]);
}

let max = 0;
