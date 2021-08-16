let input = `4
1 2 3 4`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, str] = input;
n = +n;

const arr = str.split(' ');
const arrNum = +arr.join('');
const b = arr[arr.length - 1];
const a = arr[arr.length - 2];

arr[arr.length - 1] = a;
arr[arr.length - 2] = b;

const afterArrNum = +arr.join('');

if (afterArrNum > arrNum) {
  console.log(arr.join(' '));
} else {
  console.log(-1);
}

// 콜스텍 터짐
// const arr = Array.from(Array(n).fill(1), (x, idx) => x + idx);

// const combiList = permutation(arr, n).map((list) => list.join(' '));
// const nextIdx = combiList.indexOf(str) + 1;

// if (nextIdx === combiList.length) {
//   console.log(-1);
// } else {
//   console.log(combiList[nextIdx]);
// }

// function permutation(arr, selectNum) {
//   let result = [];
//   if (selectNum === 1) return arr.map((v) => [v]);

//   arr.forEach((v, idx, arr) => {
//     const fixer = v;
//     const restArr = arr.filter((_, index) => index !== idx);
//     const permuationArr = permutation(restArr, selectNum - 1);
//     const combineFixer = permuationArr.map((v) => [fixer, ...v]);
//     result.push(...combineFixer);
//   });
//   return result;
// }
