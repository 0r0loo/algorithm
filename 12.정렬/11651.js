// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `5
0 4
1 2
1 -1
2 2
3 3`
  .trim()
  .split('\n');

const [n, ...locList] = input;

locList.sort((a, b) => {
  const aList = a.split(' ').map((str) => +str);
  const bList = b.split(' ').map((str) => +str);

  if (aList[1] > bList[1]) {
    return 1;
  } else if (aList[1] < bList[1]) {
    return -1;
  } else {
    return aList[0] - bList[0];
  }
});

console.log(locList.join('\n').trim());
