let input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [str, n, ...commandList] = input;
const left = str.split('');
const right = [];
console.log(commandList);
for (let i = 0; i < commandList.length; i++) {
  switch (commandList[i]) {
    case 'L':
      if (left.length !== 0) {
        right.push(left.pop());
      }
      break;
    case 'D':
      if (right.length !== 0) {
        left.push(right.pop());
      }
      break;
    case 'B':
      left.pop();
      break;
    default:
      left.push(commandList[i].split(' ')[1]);
      break;
  }
}
console.log(left.join('') + right.reverse().join(''));
/*

let cursor = str.length;
let newStr = str;
for (let i = 0; i < commandList.length; i++) {
  switch (commandList[i]) {
    case 'L':
      if (cursor !== 0) {
        cursor--;
      }
      break;
    case 'D':
      if (cursor !== newStr.length) {
        cursor++;
      }
      break;
    case 'B':
      if (cursor !== 0) {
        newStr = newStr.slice(0, cursor - 1) + newStr.slice(cursor);
        cursor--;
      }
      break;
    default:
      const char = commandList[i].split(' ')[1];
      newStr = newStr.slice(0, cursor) + char + newStr.slice(cursor);
      cursor++;
      break;
  }
}
console.log(newStr);

 */
