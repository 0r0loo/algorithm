/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  return nums.map((_, idx1) =>
    nums.reduce((acc, cur, idx2) => (idx1 === idx2 ? acc * 1 : acc * cur), 1)
  );
};

productExceptSelf = function (nums) {
  const out = [];
  let p = 1;

  for (let i = 0; i < nums.length; i++) {
    out.push(p);
    p *= nums[i];
  }
  p = 1;

  for (let i = nums.length - 1; i > -1; i--) {
    out[i] *= p;
    p *= nums[i];
  }
  return out;
};

let input = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(input));

/*
  나눗셈 쓰지말고 O(n)에 풀라고 했는데
  n^2 인거 같다 내 풀이 9640ms 걸렸다... 내장 메소드가 잘되있어서 통과했다..ㅠ

  책의 풀이
  풀이1 왼쪽 곰셈 결과에 오른쪽 값을 차례대로 곱셈
  108ms...
  책에 나온 풀이 개빠른데 직관적으로 바로 떠오르진 않음.... 대박 차이보소...
*/
