// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

// 솔루션
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
