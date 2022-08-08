// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `8
4
3
6
8
7
5
2
1`
  .trim()
  .split('\n');

let [n, ...sequence] = input.map((str) => +str);
const stack = [];
let result = '';
let i = 1;
while (true) {
  if (stack[stack.length - 1] === sequence[0]) {
    result += '-\n';
    stack.pop();
    sequence.shift();
  } else {
    result += '+\n';
    stack.push(i);
    i++;
  }

  if (sequence.length === 0 || stack[stack.length - 1] > sequence[0]) {
    break;
  }
}

if (sequence.length !== 0) {
  console.log('NO');
} else {
  console.log(result.trim());
}

// 종료 조건  stack의 마지막 값이  배열 첫번쨰값보다 크면 NO
// sequence가 길이가 0 이되면 YES
