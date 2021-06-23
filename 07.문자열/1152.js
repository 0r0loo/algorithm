// 단어의 개수
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = '   '.trim();
if (input === '') {
  console.log(0);
} else {
  console.log(input.split(' ').length);
}
