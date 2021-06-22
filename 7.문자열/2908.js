let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [first, second] = input;

const reverseFirstList = [];
const reverseSecondList = [];

for (let i = first.length - 1; i >= 0; i--) {
  reverseFirstList.push(first[i]);
  reverseSecondList.push(second[i]);
}

const reverseFirst = Number(reverseFirstList.join(''));
const reverseSecond = Number(reverseSecondList.join(''));

console.log(reverseFirst >= reverseSecond ? reverseFirst : reverseSecond);
