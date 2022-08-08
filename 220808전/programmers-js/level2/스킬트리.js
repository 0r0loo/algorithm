function solution(skill, skill_trees) {
  let result = 0;

  const skillList = skill_trees.map((str) => {
    const arr = [];
    for (let i of str) {
      if (skill.includes(i)) {
        arr.push(i);
      }
    }
    return arr;
  });

  for (let i = 0; i < skillList.length; i++) {
    let isTrue = true;
    for (let j = 0; j < skillList[i].length; j++) {
      if (skillList[i][j] !== skill[j]) {
        isTrue = false;
        break;
      }
    }
    if (isTrue) result++;
  }
  return result;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
