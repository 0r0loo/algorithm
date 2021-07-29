function solution(s) {
  var answer = '';
  let i = 0;

  while (i < s.length) {
    switch (s[i]) {
      case 'z':
        answer += '0';
        i += 4;
        break;
      case 'o':
        answer += '1';
        i += 3;
        break;
      case 't':
        if (s[i + 1] === 'w') {
          answer += '2';
          i += 3;
        } else {
          answer += '3';
          i += 5;
        }
        break;
      case 'f':
        if (s[i + 1] === 'o') {
          answer += '4';
          i += 4;
        } else {
          answer += '5';
          i += 4;
        }
        break;
      case 's':
        if (s[i + 1] === 'i') {
          answer += '6';
          i += 3;
        } else {
          answer += '7';
          i += 5;
        }
        break;
      case 'e':
        answer += '8';
        i += 5;
        break;
      case 'n':
        answer += '9';
        i += 4;
        break;
      default:
        answer += s[i];
        i++;
        break;
    }
  }

  return +answer;
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
