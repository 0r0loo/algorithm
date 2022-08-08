function solution(s, n) {
  const ascNumList = [];
  for (let i = 0; i < s.length; i++) {
    ascNumList.push(s.charCodeAt(i));
  }

  const result = [];
  ascNumList.forEach((num) => {
    if (num === 32) {
      result.push(String.fromCharCode(num));
    } else if (num <= 90) {
      num += n;
      if (num > 90) {
        num -= 26;
      }
      result.push(String.fromCharCode(num));
    } else {
      num += n;
      if (num > 122) {
        num -= 26;
      }
      result.push(String.fromCharCode(num));
    }
  });
  return result.join('');
}

/*
    s	n	result
"AB"	1	"BC"
"z"	1	"a"
"a B z"	4	"e F d"
*/

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
