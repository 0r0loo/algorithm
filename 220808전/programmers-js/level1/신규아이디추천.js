function solution(new_id) {
  new_id = new_id.toLowerCase();
  const newIdList = new_id.split('').filter((char) => {
    if ('~!@#$%^&*()=+[{]}:?,<>/'.split('').includes(char)) {
      return false;
    }
    return true;
  });
  // 3 단계
  const level3List = [];
  for (let i = 0; i < newIdList.length; i++) {
    if (level3List[level3List.length - 1] === '.' && newIdList[i] === '.') {
      continue;
    } else {
      level3List.push(newIdList[i]);
    }
  }
  // 4 단계
  if (level3List[level3List.length - 1] === '.') level3List.pop();
  if (level3List[0] === '.') level3List.shift();

  // 5 단계
  if (level3List.length === 0) {
    level3List.push('a');
  }
  // 6 단계
  let level6List = level3List;
  if (level3List.length >= 16) {
    level6List = level3List.slice(0, 15);
    if (level6List[14] === '.') {
      level6List.pop();
    }
  }

  // 7 단계
  while (level6List.length < 3) {
    level6List.push(level6List[level6List.length - 1]);
  }

  return level6List.join('');
}

console.log(solution('...!@BaT#*..y.abcdefghijklm') === 'bat.y.abcdefghi');
console.log(solution('z-+.^.') === 'z--');
console.log(solution('=.=') === 'aaa');
console.log(solution('123_.def') === '123_.def');
console.log(solution('abcdefghijklmn.p') === 'abcdefghijklmn');
