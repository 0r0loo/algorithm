let input = `(((()(()()))(())()))(()())`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

const stack = [];

let result = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    stack.push('(');
  } else {
    // 레이저
    if (input[i - 1] === '(') {
      stack.pop();
      result += stack.length;
    } else {
      stack.pop();
      result += 1;
    }
  }
}
console.log(result);
