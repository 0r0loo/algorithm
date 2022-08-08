function solution(w, h) {
  if (w === h) {
    return w * h - w;
  }
  return w * h - (w + h - gcd(w, h));
}

function gcd(a, b) {
  if (b === 0) return a;
  if (a > b) {
    const r = a % b;
    return gcd(b, r);
  } else {
    const r = b % a;
    return gcd(a, r);
  }
}
