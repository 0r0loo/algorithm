function solution(s) {
  let temp = s;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    temp = temp.slice(1) + temp[0];
    result += getBraket(temp);
  }
  return result;
}

function getBraket(str) {
  console.log(str);
  const stack = [];
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (char === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    } else if (char === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution('[](){}'));
console.log(solution('{{{}'));

/*
  function solution(s) {
  let temp = s;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    temp = temp.slice(1) + temp[0];
    result += getBraket(temp);
  }
  return result;
}

function getBraket(str) {
  const stack = [];
  for (let char of str) {
    switch (char) {
      case '[':
        stack.push(char);
        break;
      case '(':
        stack.push(char);
        break;
      case '{':
        stack.push(char);
        break;
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        }
        break;
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        }
        break;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        }
        break;
    }
  }
  return stack.length === 0 ? 1 : 0;
}

*/
