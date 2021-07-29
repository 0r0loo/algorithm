let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, ...strList] = input;

function solution(s) {
  var answer = true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack.length > 1) {
      if (stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') {
        stack.pop();
        stack.pop();
      }
    }
  }

  stack.length === 0 ? (answer = 'YES') : (answer = 'NO');

  return answer;
}

for (let i = 0; i < +n; i++) {
  console.log(solution(strList[i]));
}
