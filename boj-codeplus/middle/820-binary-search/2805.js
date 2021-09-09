let input = `5 20
4 42 40 26 46`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [nmStr, str] = input;

const [n, m] = nmStr.split(' ').map(Number);
const list = str
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr[arr.length - 1];
  let max = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = getTree(arr, mid);
    if (sum === target) {
      return mid;
    } else if (sum > target) {
      left = mid + 1;
      max = Math.max(max, mid);
    } else {
      right = mid - 1;
    }
  }
  return max;
}

function getTree(arr, mid) {
  return arr
    .map((tree) => {
      if (tree <= mid) {
        return 0;
      } else {
        return tree - mid;
      }
    })
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(binarySearch(list, m));
