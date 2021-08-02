function solution(dirs) {
  const coordinate = [0, 0];

  const map1 = new Map();

  for (let char of dirs) {
    if (char === 'U') {
      if (coordinate[1] + 1 !== 6) {
        const temp = [coordinate[0], coordinate[1] + 1];
        if (coordinate[1] < temp[1]) {
          map1.set(`${coordinate}_${temp}`, 1);
        } else {
          map1.set(`${temp}_${coordinate}`, 1);
        }
        coordinate[1] = coordinate[1] + 1;
      }
    } else if (char === 'D') {
      if (coordinate[1] + -1 !== -6) {
        const temp = [coordinate[0], coordinate[1] + -1];
        if (coordinate[1] < temp[1]) {
          map1.set(`${coordinate}_${temp}`, 1);
        } else {
          map1.set(`${temp}_${coordinate}`, 1);
        }
        coordinate[1] = coordinate[1] + -1;
      }
    } else if (char === 'R') {
      if (coordinate[0] + 1 !== 6) {
        const temp = [coordinate[0] + 1, coordinate[1]];
        if (coordinate[0] < temp[0]) {
          map1.set(`${coordinate}_${temp}`, 1);
        } else {
          map1.set(`${temp}_${coordinate}`, 1);
        }
        coordinate[0] = coordinate[0] + 1;
      }
    } else if (char === 'L') {
      if (coordinate[0] + -1 !== -6) {
        const temp = [coordinate[0] - 1, coordinate[1]];
        if (coordinate[0] < temp[0]) {
          map1.set(`${coordinate}_${temp}`, 1);
        } else {
          map1.set(`${temp}_${coordinate}`, 1);
        }
        coordinate[0] = coordinate[0] - 1;
      }
    }
  }
  return map1.size;
}

// console.log(solution('ULURRDLLU')); // 7
// console.log(solution('LULLLLLLU')); // 7
console.log(solution('LLLLRLRLRLL')); // 5
// console.log(solution('UUUUDUDUDUUU')); // 5

/*

  function solution(dirs) {
  const u = [0, 1];
  const d = [0, -1];
  const r = [1, 0];
  const l = [-1, 0];

  let coordinate = [0, 0];
  const map1 = new Map();

  for (let char of dirs) {
    let temp;
    let key;
    switch (char) {
      case 'U':
        temp = [coordinate[0] + u[0], coordinate[1] + u[1]];
        checkTemp(temp);
        key = makeKey(temp, coordinate);
        map1.set(key, 1);
        coordinate = temp;
        break;
      case 'D':
        temp = [coordinate[0] + d[0], coordinate[1] + d[1]];
        checkTemp(temp);
        key = makeKey(temp, coordinate);
        map1.set(key, 1);
        coordinate = temp;
        break;
      case 'R':
        temp = [coordinate[0] + r[0], coordinate[1] + r[1]];
        checkTemp(temp);
        key = makeKey(temp, coordinate);
        map1.set(key, 1);
        coordinate = temp;
        break;
      case 'L':
        temp = [coordinate[0] + l[0], coordinate[1] + l[1]];
        checkTemp(temp);
        key = makeKey(temp, coordinate);
        map1.set(key, 1);
        coordinate = temp;
        break;
    }
  }

  console.log(map1);

  return map1.size;
}

function makeKey(aArr, bArr) {
  if (aArr[0] > bArr[0]) {
    return `${bArr}-${aArr}`;
  } else if (aArr[0] < bArr[0]) {
    return `${aArr}-${bArr}`;
  } else {
    if (aArr[1] > bArr[1]) {
      return `${bArr}-${aArr}`;
    } else {
      return `${aArr}-${bArr}`;
    }
  }
}

function checkTemp(temp) {
  if (temp[0] > 5) {
    temp[0] = temp[0] - 1;
  } else if (temp[0] < -5) {
    temp[0] = temp[0] + 1;
  } else if (temp[1] > 5) {
    temp[1] = temp[1] - 1;
  } else {
    temp[1] = temp[1] + 1;
  }
  return temp;
}

*/
