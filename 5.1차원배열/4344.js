// 평균은 넘겠지
// https://hianna.tistory.com/446 반올림
let input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testCaseNum = Number(input[0]);
for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(' ').map((num) => Number(num));
  const num = arr[0];
  const score = arr.slice(1, arr.length);
  const sum = score.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / num;
  let avgUpCnt = 0;
  score.forEach((item) => {
    if (item > avg) {
      avgUpCnt++;
    }
  });
  console.log(((avgUpCnt / num) * 100).toFixed(3) + '%');
}
