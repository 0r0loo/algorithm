let input = `9 3
1 2 3 4 5 6 7 8 9`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [nm, tsstr] = input;
const [n, m] = nm.split(' ').map(Number);
const tsList = tsstr.split(' ').map(Number);

function binarySearch(arr, target) {
  let result;
  let left = Math.max(...arr);
  let right = arr.reduce((acc, cur) => acc + cur, 0);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (count(arr, mid) <= target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

function count(arr, capcity) {
  let cnt = 1;
  let sum = 0;
  for (let x of arr) {
    if (sum + x > capcity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

console.log(binarySearch(tsList, m));
