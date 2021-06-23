// 스택

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = `14
push 1
push 2
top
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
top`
  .trim()
  .split('\n');

const testCnt = Number(input[0]);
const commandList = input.slice(1, input.length);

const stack = [];
let result = '';
for (let i = 0; i < testCnt; i++) {
  switch (commandList[i]) {
    case 'top':
      result += stack[stack.length - 1] || -1;
      result += '\n';
      break;
    case 'size':
      result += stack.length;
      result += '\n';
      break;
    case 'empty':
      result += stack.length === 0 ? 1 : 0;
      result += '\n';
      break;
    case 'pop':
      result += stack.pop() || -1;
      result += '\n';
      break;
    default:
      const [command, value] = commandList[i].split(' ');
      stack.push(value);
      break;
  }
}
console.log(result.slice(0, result.length - 1));

// 시간초과
/* 콘솔로그를 여러번 해서 시간초과난대 문자열로 합쳐서 마지막에 한번만해주면 시간초과안남
    for (let i = 0; i < testCnt; i++) {
    switch (commandList[i]) {
        case 'top':
        console.log(stack[stack.length - 1] || -1);
        break;
        case 'size':
        console.log(stack.length);
        break;
        case 'empty':
        console.log(stack.length === 0 ? 1 : 0);
        break;
        case 'pop':
        console.log(stack.pop() || -1);
        break;
        default:
        const [command, value] = commandList[i].split(' ');
        stack.push(value);
        break;
    }
    }
*/
