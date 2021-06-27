// function gcdlcm(a, b) {
//   var answer = [];
//   var minNum = Math.min(a, b);
//   var maxNum = Math.max(a, b);
//   answer[0] = gcd(minNum, maxNum);
//   answer[1] = lcm(minNum, maxNum);
//   return answer;
// }
// // 최대공약수
// function gcd(minNum, maxNum) {
//   return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
// }
// // 최소공배수
// function lcm(minNum, maxNum) {
//   return (minNum * maxNum) / gcd(minNum, maxNum);
// }

// console.log(gcdlcm(12, 14));

// 21. 06. 27
function solution(n, m) {
  const result = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  result[0] = gcd(min, max);
  result[1] = lcm(min, max, result[0]);

  return result;
}

function gcd(min, max) {
  return min % max === 0 ? max : gcd(max, min % max);
}

function lcm(min, max, gcd) {
  return (min * max) / gcd;
}

console.log(solution(3, 12));
