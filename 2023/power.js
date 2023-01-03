function power(n, m) {
  if (m === 0) return 1;
  return power(n, m - 1) * n;
}

console.log(power(2, 5));
