// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var input = `5 5
5 3 1 2 4
10 10 10 10 10`.split("\n");

const [monCnt, hp] = input[0].split(" ").map((str) => +str);
const ops = input[1].split(" ").map((str) => +str);
const people = input[2].split(" ").map((str) => +str);

console.log(monCnt);
console.log(hp);
console.log(ops);
console.log(people);
