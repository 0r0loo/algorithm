function solution(numbers) {
  const numberList = numbers.split('');
  const arr = [];
  for (let i = 1; i <= numberList.length; i++) {
    arr.push(...permutation(numberList, i).map((list) => +list.join('')));
  }
  const set = new Set(arr);

  return [...set].filter((num) => isPrime(num)).length;
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

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

console.log(solution('17')); // 3
console.log(solution('011')); //2
