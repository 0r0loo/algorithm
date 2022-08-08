function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, idx) => (acc += cur * B[idx]), 0);
}

console.log(solution([5, 4, 4], [1, 4, 2])); // 29
console.log(solution([1, 2], [3, 4])); // 10
