// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `3
2 2
1 5
13 29`.split('\n');

let [cnt, ...testList] = input;

for (let i = 0; i < +cnt; i++) {
  let [n, m] = testList[i].split(' ').map((str) => +str);
  let res = 1;
  let diff = m - n;
  // 항상 n이 diff보다 더 크도록 변경
  if (diff > n) [n, diff] = [diff, n];
  // 경우의 수 mCn
  for (let i = m; i > n; i--) {
    res *= i;
  }
  for (let i = 2; i <= diff; i++) {
    res /= i;
  }
  console.log(temp);
}

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const numTestcase = parseInt(input[0]);

const solution = (n, m) => {
  let res = 1;
  let diff = m - n;
  // 항상 n이 diff보다 더 크도록 변경
  if (diff > n) [n, diff] = [diff, n];
  // 경우의 수 mCn
  for (let i = m; i > n; i--) {
    res *= i;
  }
  for (let i = 2; i <= diff; i++) {
    res /= i;
  }
  return res;
};

for (let i = 1; i <= numTestcase; i++) {
  const [n, m] = input[i].split(' ').map(Number);
  console.log(solution(n, m));
}

 */
