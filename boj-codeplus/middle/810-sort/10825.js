let input = `12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, ...list] = input;

const scoreList = list.map((arr) => arr.split(' '));

scoreList.sort((a, b) => {
  if (a[1] === b[1]) {
    if (a[2] === b[2]) {
      if (a[3] === b[3]) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return b[3] - a[3];
      }
    } else {
      return a[2] - b[2];
    }
  } else {
    return b[1] - a[1];
  }
});

let result = '';
for (let i = 0; i < scoreList.length; i++) {
  result += scoreList[i][0] + '\n';
}
console.log(result.trim());
