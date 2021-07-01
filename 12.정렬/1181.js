// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.split('\n');

const [n, ...strList] = input;
const setList = new Set(strList);
const newList = [...setList];

newList.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
});

console.log(newList.join('\n').trim());
