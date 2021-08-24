let input = `4
1 2 3 4 5`
  .trim()
  .split('\n');
// input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.shift());
const inputArray = input[0].split(' ').map((n) => parseInt(n));
let reverseIndex;

for (let i = N - 1; i > 0; i--) {
  if (inputArray[i] > inputArray[i - 1]) {
    reverseIndex = i - 1;
    break;
  }
}

if (reverseIndex === undefined) return console.log(-1);

for (let j = N - 1; j > reverseIndex; j--) {
  if (inputArray[reverseIndex] < inputArray[j]) {
    const temp = inputArray[reverseIndex];
    inputArray[reverseIndex] = inputArray[j];
    inputArray[j] = temp;
    break;
  }
}

const arrange = inputArray.slice(reverseIndex + 1).reverse();

console.log(
  inputArray
    .slice(0, reverseIndex + 1)
    .concat(arrange)
    .join(' ')
);

// 1 2 4 3 5

/*
틀림 ㅠㅠ
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
*/
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
