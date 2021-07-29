// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`
  .trim()
  .split('\n');

let [n, ...arr] = input;
let result = '';
for (let i = 0; i < +n; i++) {
  const [cnt, ...scoreList] = arr[i].split(' ');
  const avg = scoreList.reduce((acc, cur) => acc + +cur, 0) / +cnt;
  let upAvgCnt = 0;
  scoreList.forEach((str) => +str > avg && upAvgCnt++);
  const rate = (upAvgCnt / cnt) * 100;
  result += rate.toFixed(3) + '%' + '\n';
}

console.log(result.trim());
