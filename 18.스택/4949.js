// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');
let input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split('\n');
input.pop();

input = input.map((str) => str.replace(/([^()[\]])/g, ''));
console.log(input);

// input = input.map((str) => str.replace(/([^()[\]])/g, ''));
// let result = '';
// input.forEach((str) => {
//   const stack = [];
//   str.split('').forEach((char) => {
//     if (['(', ')', '[', ']'].includes(char)) {
//       stack.push(char);
//     }
//     if (char === ')' && stack[stack.length - 2] === '(') {
//       stack.pop();
//       stack.pop();
//     } else if (char === ']' && stack[stack.length - 2] === '[') {
//       stack.pop();
//       stack.pop();
//     }
//   });
//   if (stack.length === 0) {
//     result += 'yes\n';
//   } else {
//     result += 'no\n';
//   }
// });

// console.log(result.trim());
