function solution(d, budget) {}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));

/*


  몇개 테크 통과못함 ㅠㅠ 조합으로 했음

  function solution(d, budget) {
  let result;
  for (let i = 1; i <= d.length; i++) {
    const selecList = combination(d, i);
    const filterList = selecList
      .map((numList) => numList.reduce((acc, cur) => acc + cur, 0))
      .filter((sum) => budget >= sum);
    if (filterList.length === 0) {
      result = i - 1;
      break;
    }
    result = i;
  }
  return result;
}

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

*/
