function solution(record) {
  const map1 = new Map();
  const list = [];

  for (let i = 0; i < record.length; i++) {
    const [command, id, nickname] = record[i].split(' ');

    switch (command) {
      case 'Enter':
        map1.set(id, nickname);
        list.push(`${id}_님이_들어왔습니다.`);
        break;
      case 'Leave':
        list.push(`${id}_님이_나갔습니다.`);
        break;
      case 'Change':
        map1.set(id, nickname);
        break;
      default:
        break;
    }
  }
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i].split('_');
    list[i] = map1.get(a) + b + ' ' + c;
  }
  return list;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
