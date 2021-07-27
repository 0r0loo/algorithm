function solution(n, words) {
  let pAList = [words[0]];
  let index;
  let isSuccess = true;

  for (let i = 1; i < words.length; i++) {
    let isSame = words[i - 1][words[i - 1].length - 1] === words[i][0];
    if (isSame && !pAList.includes(words[i])) {
      pAList.push(words[i]);
      continue;
    } else {
      index = i;
      isSuccess = false;
      break;
    }
  }

  const cycle = Math.ceil((index + 1) / n);
  const rest = (index + 1) % n;

  if (isSuccess) {
    return [0, 0];
  }

  return [rest || n, cycle];
}

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
); // [3, 3]

console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0, 0]

console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
); // [1, 3]
