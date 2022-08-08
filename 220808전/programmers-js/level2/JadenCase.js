function solution(s) {
  let answer = '';
  const splitList = s.split(' ');
  console.log(splitList);
  answer = splitList.map(
    (str) =>
      (str[0] ? str[0].toUpperCase() : '') +
      (str[1] ? str.slice(1).toLowerCase() : '')
  );
  console.log(answer);
  return answer.join(' ');
}

console.log(solution('3people  unFollowed me'));
// console.log(solution('for the last week'));
// console.log(solution('           '));

// var answer = '';
// answer = s
//   .split(' ')
//   .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase());
// return answer.join(' ');
