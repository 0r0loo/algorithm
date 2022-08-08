/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return s.reverse();
};
/*
  투포인터 알고리즘 으로 도 풀 수 있다.
  left, right 서로 스왑 하는 방법으로 코드 구현해보면
  시간은 revese() 메소드 쓰는게 더 빠르네 ㅋ
*/

function reverseString2(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}
let s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString2(s));
