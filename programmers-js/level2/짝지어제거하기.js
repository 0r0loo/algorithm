function solution(s) {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
