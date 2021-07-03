function solution(n) {
  return fibonacci(n) % 1234567;
}

const fibonacci = (n) => {
  let fList = [0, 1];
  for (let i = 2; i <= n; i++) {
    fList[i] = (fList[i - 2] % 1234567) + (fList[i - 1] % 1234567);
  }
  return fList[n];
};

console.log(solution(5));
