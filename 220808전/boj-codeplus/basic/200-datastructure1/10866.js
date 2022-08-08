let input = `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...command] = input;
let result = '';
const deque = [];

for (let i of command) {
  if (i.includes('push_back')) {
    deque.push(i.split(' ')[1]);
  }

  if (i.includes('push_front')) {
    deque.unshift(i.split(' ')[1]);
  }

  if (i.includes('pop_front')) {
    const front = deque.shift();
    if (front) {
      result += front + '\n';
    } else {
      result += '-1\n';
    }
  }

  if (i.includes('pop_back')) {
    const back = deque.pop();
    if (back) {
      result += back + '\n';
    } else {
      result += '-1\n';
    }
  }

  if (i === 'size') {
    result += deque.length + '\n';
  }

  if (i === 'empty') {
    const leng = deque.length;
    if (leng === 0) {
      result += '1\n';
    } else {
      result += '0\n';
    }
  }

  if (i === 'front') {
    const head = deque[0];
    if (head === undefined) {
      result += '-1\n';
    } else {
      result += head + '\n';
    }
  }

  if (i === 'back') {
    const back = deque[deque.length - 1];
    if (back === undefined) {
      result += '-1\n';
    } else {
      result += back + '\n';
    }
  }
}

console.log(result.trim());
