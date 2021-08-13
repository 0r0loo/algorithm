function solution(s) {
  if (s.length < 2 || s === s.split('').reverse().join('')) {
    return s.length;
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    result = [result, expand(s, i, i + 1), expand(s, i, i + 2)].sort(
      (a, b) => b.length - a.length
    )[0];
  }
  console.log(result);
  return result.length;
}

function expand(string, left, right) {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  return string.slice(left + 1, right);
}

// console.log(solution('abcdcba'));
console.log(solution('abacde'));
