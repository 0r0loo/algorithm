function solution(X, Y, D) {
  Y -= X;

  const quotient = Math.floor(Y / D);
  if (Y % D === 0) {
    return quotient;
  } else {
    return quotient + 1;
  }
}

/**
 * 44프로 => 문제를 잘읽자 같거나 크다
 * 
 * function solution(X, Y, D) {
  Y -= X;
  const quotient = Math.floor(Y / D);
  return quotient + 1;
}

 */
