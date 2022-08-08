function solution(A) {
  let right = A.reduce((acc, cur) => acc + cur, 0) - A[0];
  let left = A[0];
  let min = Math.abs(left - right);
  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    if (min > Math.abs(left - right)) {
      min = Math.abs(left - right);
    }
  }
  return min;
}

console.log(solution([-1000, 1, 2, 3, 1000]));

// 빈배열 x
