// // 큐2
// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

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
front`.split('\n');

const n = +input[0];
const commandList = input.slice(1, input.length);

let result = '';
const que = [];

for (let i = 0; i < n; i++) {
  switch (commandList[i]) {
    case 'pop':
      result += que.length === 0 ? -1 : que.shift();
      result += '\n';
      break;
    case 'size':
      result += `${que.length}\n`;
      break;
    case 'empty':
      result += que.length === 0 ? 1 : 0;
      result += '\n';
      break;
    case 'front':
      result += que.length === 0 ? -1 : que[0];
      result += '\n';
      break;
    case 'back':
      result += que.length === 0 ? -1 : que[que.length - 1];
      result += '\n';
      break;
    default:
      // push X
      const pushNum = commandList[i].split(' ')[1];
      que.push(pushNum);
      break;
  }
}

console.log(result.trim());
