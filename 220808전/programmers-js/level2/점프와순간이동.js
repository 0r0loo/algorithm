function solution(n) {
  let result = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      result++;
    }
  }
  return result;
}

console.log(solution(5000));
