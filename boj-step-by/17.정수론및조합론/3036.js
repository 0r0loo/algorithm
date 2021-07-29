// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `3
8 4 2`
  .trim()
  .split('\n');

let [n, strList] = input;
n = +n;
const inputList = strList.split(' ');
const firstRing = inputList[0];
const restRingList = inputList.slice(1);
let result = '';

result = restRingList
  .map(
    (num) => firstRing / gcd(num, firstRing) + '/' + num / gcd(num, firstRing)
  )
  .join('\n');

console.log(result.trim());

function gcd(a, b) {
  if (b === 0) return a;
  if (a > b) {
    const r = a % b;
    return gcd(b, r);
  } else {
    const r = b % a;
    return gcd(a, r);
  }
}
