// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

input = `5
55 185
58 183
88 186
60 175
46 155`
  .trim()
  .split('\n');

const [n, ...arr] = input;
const specList = arr.map((str) => {
  return str.split(' ').map((str) => +str);
});

const rankList = new Array(+n).fill(1);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (specList[i][0] < specList[j][0]) {
      if (specList[i][1] < specList[j][1]) {
        rankList[i] += 1;
      }
    }
  }
}
console.log(rankList.join(' '));
