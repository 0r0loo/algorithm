let input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...comList] = input;
let len = 0;
let firstIdx = 0;
let queue = [];
let result = '';

for (let i = 0; i < comList.length; i++) {
  switch (comList[i]) {
    case 'pop':
      if (len === 0) {
        result += '-1\n';
      } else {
        result += queue[firstIdx] + '\n';
        firstIdx++;
        len--;
      }
      break;
    case 'size':
      result += len + '\n';
      break;
    case 'empty':
      if (len === 0) {
        result += '1\n';
      } else {
        result += '0\n';
      }
      break;
    case 'front':
      if (len === 0) {
        result += '-1\n';
      } else {
        result += queue[firstIdx] + '\n';
      }
      break;
    case 'back':
      if (len === 0) {
        result += '-1\n';
      } else {
        result += queue[queue.length - 1] + '\n';
      }
      break;
    default:
      queue.push(comList[i].split(' ')[1]);
      len++;
      break;
  }
}

console.log(result.trim());
