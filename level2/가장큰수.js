/* 
  순열로 풀다가 결국 통과를 하지 못했다... 
  테케가 빡쏀듯... 문자열로 바꾸고 별짓다해봤는데 안된다 ㅠㅠ

*/

function solution(numbers) {
  var answer = '';
  numbers = numbers
    .map((v) => v + '')
    .sort((a, b) => {
      console.log(`a : ${a}, b : ${b}`);
      console.log(`b+a : ${b + a}, a+b: ${a + b}`);
      return b + a - (a + b);
    });
  console.log(numbers);
  numbers[0] === '0' ? (answer += 0) : (answer = numbers.join(''));
  return answer;
}
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([838, 83]));
