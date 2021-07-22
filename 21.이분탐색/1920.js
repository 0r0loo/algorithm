// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let input = `5
4 1 5 2 3
5
1 3 7 9 5`
  .trim()
  .split('\n');

let [n, nStr, m, mStr] = input;
const nList = nStr
  .split(' ')
  .map((str) => +str)
  .sort((a, b) => a - b);
const mList = mStr.split(' ').map((str) => +str);
let result = '';

mList.forEach((num) => {
  result += binarySearch(num, nList) + '\n';
});
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

/* 이분 탐색이 아니라 시간초과 날꺼같은 코드
  역시 시간초과
  let [n, nStr, m, mStr] = input;
const nList = nStr.split(' ');
const mList = mStr.split(' ');
let result = '';

mList.forEach((num) => {
  if (nList.includes(num)) {
    result += 1 + '\n';
  } else {
    result += 0 + '\n';
  }
});

console.log(result.trim());

  
  
  
  */
