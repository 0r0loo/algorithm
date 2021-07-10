function solution(s) {
  var answer = true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack.length > 1) {
      if (stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') {
        stack.pop();
        stack.pop();
      }
    }
  }

  stack.length === 0 ? (answer = true) : (answer = false);

  return answer;
}

console.log(solution('()()'));
