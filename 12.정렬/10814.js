// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.split('\n');

const [n, ...arr] = input;

arr.sort((a, b) => {
  const aList = a.split(' ');
  const bList = b.split(' ');
  return aList[0] - bList[0];
});

console.log(arr.join('\n').trim());
