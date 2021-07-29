function solution(n, arr1, arr2) {
  const decode1 = [];
  const decode2 = [];

  for (let i = 0; i < arr1.length; i++) {
    const biNum = arr1[i].toString(2);
    if (biNum.length !== n) {
      const zero = '0'.repeat(n - biNum.length);
      decode1.push((zero + biNum).split(''));
    } else {
      decode1.push(biNum.split(''));
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const biNum = arr2[i].toString(2);
    if (biNum.length !== n) {
      const zero = '0'.repeat(n - biNum.length);
      decode2.push((zero + biNum).split(''));
    } else {
      decode2.push(biNum.split(''));
    }
  }
  console.log(decode1);
  console.log(decode2);

  const result = [];

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (+decode1[i][j] + +decode2[i][j] === 0) {
        str += ' ';
      } else {
        str += '#';
      }
    }
    result.push(str);
  }

  return result;
}

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
