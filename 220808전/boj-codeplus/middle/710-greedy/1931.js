let input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, ...strList] = input;
n = +n;
const tsList = strList.map((str) => str.split(' ').map(Number));

tsList.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let result = 0;

let prevEnd = 0;

for (let i = 0; i < tsList.length; i++) {
  let currentStart = tsList[i][0];
  let currentEnd = tsList[i][1];

  if (prevEnd > currentStart) {
    continue;
  } else {
    result++;
    prevEnd = currentEnd;
  }
}
console.log(result);
/**
 *
 * 활동 선택 문제 : 한 번에 하나의 활동만 처리할 수 있는 하나의 강의실에서 제안된 활동들 중 가장 많은 활동을 처리할 수 있는 스케줄을 짜는 문제
 */
