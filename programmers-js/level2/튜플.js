function solution(s) {
  const map1 = new Map();

  s = s.slice(1, s.length - 1);
  const outList = [];
  let numStr = '';

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      numStr += s[i];
    } else if (s[i] === '}') {
      outList.push(numStr);
      numStr = '';
    } else if (s[i] === ',' && s[i - 1] !== '}') {
      outList.push(numStr);
      numStr = '';
    }
  }

  for (let val of outList) {
    if (map1.has(val)) {
      map1.set(val, map1.get(val) + 1);
    } else {
      map1.set(val, 1);
    }
  }

  return [...map1].sort((a, b) => b[1] - a[1]).map((arr) => +arr[0]);
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')); // [3, 2, 4, 1]
console.log(solution('{{20,111},{111}}')); // [111, 20]
