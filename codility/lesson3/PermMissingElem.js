function solution(A) {
  A.sort((a, b) => a - b);
  if (A.length === A[A.length - 1]) return A.length + 1;
  for (let i = 0; i < A.length; i++) {
    if (i + 1 !== A[i]) {
      return i + 1;
    }
  }
  return 1;
}
console.log(solution([]));
// console.log(solution([1, 2, 3]));
// console.log(solution([2, 3, 1, 5]));
// console.log(solution(Array.from({ length: 1000000 }, (_, idx) => idx + 1)));
