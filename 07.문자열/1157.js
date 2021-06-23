// 단어 공부

// A : 65
// Z : 90
// const input = 'Mississipi';

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const upStr = input.toUpperCase();

let numList = [];

for (let i = 65; i <= 90; i++) {
  const alpa = String.fromCharCode(i);
  const idx = upStr.indexOf(alpa);
  if (idx === -1) {
    numList.push(0);
  } else {
    let cnt = 0;
    upStr.split('').forEach((item) => item === alpa && cnt++);
    numList.push(cnt);
  }
}
const max = numList.reduce((acc, cur) => (acc < cur ? cur : acc), 0);

const maxIdx = numList.indexOf(max);
const secondMaxIdx = numList.indexOf(max, maxIdx + 1);

if (secondMaxIdx !== -1) {
  console.log('?');
} else {
  console.log(String.fromCharCode(maxIdx + 65));
}
