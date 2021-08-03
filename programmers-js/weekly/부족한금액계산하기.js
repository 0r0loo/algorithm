function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += i * price;
  }
  return money - sum > 0 ? 0 : sum - money;
}

console.log(solution(3, 20, 4)); // 10
