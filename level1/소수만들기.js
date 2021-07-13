function solution(nums) {
  const sumList = combination(nums, 3).map((arr) =>
    arr.reduce((acc, cur) => acc + cur, 0)
  );
  return sumList.filter((sum) => isPrime(sum)).length;
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

function isPrime(n) {
  const primeList = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (primeList[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeList[j] = false;
      }
    }
  }
  return primeList[n];
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
