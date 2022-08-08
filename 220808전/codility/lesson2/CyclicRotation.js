function solution(A, K) {
  if (A.length === 0) return A;
  while (K > 0) {
    A.unshift(A.pop());
    K--;
  }
  return A;
}
console.log(solution([], 1));
console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));

/**
 * 
 * 빈 배열일떄 [undefined] 가 나온다..
 * function solution(A, K) {
  while (K > 0) {
    A.unshift(A.pop());
    K--;
  }
  return A;
}
 * 
 */
