// 21. 06 .28
function solution(s) {
  const arr = s.split(' ').map((item) => +item);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let result = '';
  result += min;
  result += ' ';
  result += max;
  return result;
}
