// 테스트 12, 13 런타임 오류 나는거비노 콜스텍 터진듯; => 배열 말고 스트링으로해야할듯

function solution(n) {
  let answer = '';

  while (n > 0) {
    switch (n % 3) {
      case 1:
        answer = '1' + answer;
        n = Math.floor(n / 3);
        break;
      case 2:
        answer = '2' + answer;
        n = Math.floor(n / 3);
        break;
      case 0:
        answer = '4' + answer;
        n = n / 3 - 1;
        break;
    }
  }

  return answer;
}

/*
function solution(n) {
  let i = 0;
  let sum = 0;
  let prevSum;
  
  while (sum < n) {
    i++;
    prevSum = sum;
    sum += 3 ** i;
  }
  // console.log(i, prevSum, sum);
  const list = permutation([1, 2, 4], i);
  return list[n - prevSum - 1].join('');
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(38));
console.log(solution(500000000));

function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

*/
