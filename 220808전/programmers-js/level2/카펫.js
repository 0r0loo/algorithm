function solution(brown, yellow) {
  const sum = brown + yellow;
  const result = [];

  for (let i = 1; i <= Math.sqrt(sum); i++) {
    const rest = sum % i;
    if (rest === 0) {
      if (2 * (i + sum / i - 2) === brown) {
        result.push(sum / i);
        result.push(i);
      }
    }
  }
  return result;
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); //[3,3]
console.log(solution(24, 24)); // [8, 6]
