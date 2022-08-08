function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur), arr[0]);
}

function gcd(a, b) {
  if (b === 0) return a;
  if (a > b) {
    const r = a % b;
    return gcd(b, r);
  } else {
    const r = b % a;
    return gcd(a, r);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(solution([2, 6, 8, 14])); // 168
