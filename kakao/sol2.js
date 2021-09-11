function solution(n, k) {
  const kJinsoo = n.toString(k);
  let result = 0;
  let left = 0;
  let right = 0;
  console.log(kJinsoo);

  for (let i = 0; i < kJinsoo.length; i++) {
    for (let j = i + 1; j <= kJinsoo.length; j++) {
      const p = kJinsoo.slice(i, j);
      if (getUpgradePrime(p, kJinsoo, i, j)) {
        result++;
      }
    }
  }
  return result;
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getUpgradePrime(p, str, i, j) {
  if (!isPrime(+p)) {
    return false;
  }

  if (p.includes('0')) {
    return false;
  }
  if (p === str) {
    return true;
  }

  if (j === str.length && str[i - 1] === '0') {
    return true;
  }

  if (i === 0 && str[j] === '0') {
    return true;
  }

  if (str[i - 1] === '0' && str[j] === '0') {
    return true;
  }

  return false;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
