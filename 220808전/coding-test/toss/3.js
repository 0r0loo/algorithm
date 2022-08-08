function parseSearch(search) {
  /* 쿼리 문자열 `search`를 파싱하는 함수를 작성해주세요. */

  if (search === '') return {};

  const queryList = search
    .slice(1)
    .split('&')
    .map((str) => str.split('='));

  const map1 = new Map();

  for (let list of queryList) {
    if (map1.has(list[0])) {
      if (typeof map1.get(list[0]) === 'string') {
        map1.set(list[0], [map1.get(list[0]), list[1]]);
      } else {
        map1.set(list[0], [...map1.get(list[0]), list[1]]);
      }
    } else {
      map1.set(list[0], list[1]);
    }
  }

  const resultObj = {};

  for (let [key, value] of map1) {
    resultObj[key] = value;
  }
  return resultObj;
}

console.log(parseSearch('?from=twitter'));
console.log(parseSearch('?range=1&range=8'));
console.log(parseSearch('?key=1&key=2&key=3'));
console.log(parseSearch('?from=facebook&from=article'));
