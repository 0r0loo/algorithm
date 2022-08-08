let input = `1
AA+A+
1`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, str, ...rest] = input;
console.log(n, str, rest);
rest.reverse();

const map1 = new Map();

for (let char of str) {
  if (char !== '*' && char !== '-' && char !== '+' && char !== '/') {
    if (!map1.has(char)) {
      map1.set(char, rest.pop());
    }
  }
}

const stack = [];
let result;

for (let char of str) {
  let a;
  let b;
  switch (char) {
    case '+':
      b = +stack.pop();
      a = +stack.pop();
      stack.push(a + b);
      break;
    case '-':
      b = +stack.pop();
      a = +stack.pop();
      stack.push(a - b);
      break;
    case '/':
      b = +stack.pop();
      a = +stack.pop();
      stack.push(a / b);
      break;
    case '*':
      b = +stack.pop();
      a = +stack.pop();
      stack.push(a * b);
      break;
    default:
      stack.push(map1.get(char));
      break;
  }
}
console.log(stack[0].toFixed(2));
