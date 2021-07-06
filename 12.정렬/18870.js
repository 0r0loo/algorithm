// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `5
2 4 -10 4 -9`
  .trim()
  .split('\n');

const [n, locStr] = input;
const locList = locStr.split(' ').map((str) => +str);
const result = [];
const locSet = new Set(locList);
const obj = {};
const sortLocList = [...locSet]
  .sort((a, b) => a - b)
  .forEach((num, idx) => (obj[num] = idx));

locList.forEach((num) => result.push(obj[num]));
console.log(result.join(' '));

/*
    시간초과

    for (let i = 0; i < locList.length; i++) {
  let cnt = 0;

  for (let j = 0; j < locList.length; j++) {
    if (locList[i] > locList[j]) {
      cnt++;
    }
  }

  result.push(cnt);
}

    시간초과2

    const [n, locStr] = input;
const locList = locStr.split(' ').map((str) => +str);
const result = [];
const locSet = new Set(locList);
const sortLocList = [...locSet].sort((a, b) => a - b);

const result2 = locList.map((num) => sortLocList.indexOf(num));

console.log(result2.join(' '));


*/
