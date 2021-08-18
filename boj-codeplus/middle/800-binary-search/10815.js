let input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, nStr, m, mStr] = input;
const nList = nStr
  .split(' ')
  .sort((a, b) => a - b)
  .map((str) => +str);
const mList = mStr.split(' ').map((str) => +str);

let result = '';
for (let num of mList) {
  result += binarySearch(num, nList) + ' ';
}
console.log(result.trim());

function binarySearch(n, arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) {
      return '1';
    } else if (arr[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return '0';
}
