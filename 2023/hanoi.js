function hanoi(count, from, to, temp) {
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from} 에서 ${to} 로 이동`);
  hanoi(count - 1, from, temp, to);
}

hanoi(3, "A", "C", "B"); // 원반 3개, 시작은 A 목표는 C 임시 B
