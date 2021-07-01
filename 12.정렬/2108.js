// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')

let input = `5
-1
-2
-3
-1
-2`.split('\n');
let strResult = '';

// 산술평균, 중앙값, 최빈값, 범위

let [n, ...arr] = input;
arr = arr.map((str) => +str);
arr.sort((a, b) => a - b);

// 산술 평균
const sum = arr.reduce((acc, cur) => acc + cur, 0);
const avg = sum / n;
strResult += avg.toFixed(0);
strResult += '\n';

// 중앙값
let center = 0;
if (arr.length % 2 === 0) {
  center = arr[arr.length / 2 - 1] + arr[arr.length / 2];
} else {
  center = arr[Math.floor(arr.length / 2)];
}
strResult += center;
strResult += '\n';

// 최빈값
const obj = {};
arr.forEach((num) => {
  obj[num] = (obj[num] || 0) + 1;
});

const result = [];
for (let key in obj) {
  result.push([+key, obj[key]]);
}
result.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return b[1] - a[1];
  }
});

if (result.length > 1) {
  if (result[0][1] === result[1][1]) {
    strResult += result[1][0];
  } else {
    strResult += result[0][0];
  }
} else {
  strResult += result[0][0];
}

strResult += '\n';

// 범위
const max = Math.max(...arr);
const min = Math.min(...arr);
strResult += Math.abs(max - min);

console.log(strResult);
