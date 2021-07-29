// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`
  .trim()
  .split('\n');

let [n, ...quizList] = input;
let result = '';
for (let i = 0; i < +n; i++) {
  let sum = 0;
  let cnt = 0;
  for (let j = 0; j < quizList[i].length; j++) {
    if (quizList[i][j] === 'O') {
      cnt++;
      sum += cnt;
    } else {
      cnt = 0;
    }
  }
  result += sum + '\n';
}

console.log(result.trim());
