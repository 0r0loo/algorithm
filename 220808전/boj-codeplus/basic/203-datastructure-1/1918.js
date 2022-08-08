let input = `(A+(B*C))-(D/E)`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const nums = [];
// const opers = [];
// const brackets = [];

// for (let i = 0; i < input.length; i++) {
//   const char = input[i];
//   if (char === '(') {
//     brackets.push(char);
//   } else if (char === ')') {
//     brackets.pop();
//     const right = nums.pop();
//     const left = nums.pop();
//     const oper = opers.pop();
//     nums.push(left + right + oper);
//   } else if (char === '+' || char === '-' || char === '/' || char === '*') {
//     opers.push(char);
//   } else {
//     nums.push(char);
//   }
// }

// while (opers.length > 0) {
//   nums[opers.length] += opers.pop();
// }

// console.log(nums.join(''));
