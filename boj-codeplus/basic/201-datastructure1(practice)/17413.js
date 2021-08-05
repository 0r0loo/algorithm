let input = `<   space   >space space space<    spa   c e>`.trim();
// input = require('fs').readFileSync('/dev/stdin').toString().trim()

if (!input.includes('<')) {
  console.log(
    input
      .split(' ')
      .map((str) => str.split('').reverse().join(''))
      .join(' ')
  );
} else {
  const stack = [];
  let isStack = true;
  let result = '';
  for (let char of input) {
    if ('<' === char) {
      isStack = false;
      while (stack.length > 0) {
        result += stack.pop();
      }
    }

    if (isStack) {
      if (char === ' ') {
        while (stack.length > 0) {
          result += stack.pop();
        }
        result += ' ';
      } else {
        stack.push(char);
      }
    } else {
      result += char;
    }

    if (char === '>') {
      isStack = true;
    }
  }

  result += stack.reverse().join('');
  console.log(result);
}
