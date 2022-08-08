// 21.08.22
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (stack[stack.length - 1] < number[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}

console.log(solution('1924', 2));
console.log(solution('4177252841', 4));
console.log(solution('77777', 1));

// function solution(number, k) {
//   let resultCnt = 0;
//   let i = 0;

//   while (resultCnt !== k) {
//     if (number[i] < number[i + 1]) {
//       number = number.replace(number[i], '');
//       i--;
//       resultCnt++;
//     } else {
//       i++;
//     }

//     if (number.length === i) {
//       return number.slice(0, -k);
//     }
//   }
//   return number;
// }
