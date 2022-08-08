function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const str1 = "" + num1;
  const newNum1 = +str1.split("").reverse().join("");
  return newNum1 === num2;
}

console.log(sameFrequency(182, 281));
