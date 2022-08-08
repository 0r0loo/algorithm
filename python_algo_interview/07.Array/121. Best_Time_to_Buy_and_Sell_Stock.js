/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];

  prices.forEach((price) => {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  });
  return profit;
};

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
prices = [2, 4, 1];
console.log(maxProfit(prices));

/*

내 풀이 시간초과
var maxProfit = function (prices) {
  let result = prices[1] - prices[0];

  for (let i = 0; i < prices.length - 1; i++) {
    const newPrices = prices.slice(i + 1);
    const max = Math.max(...newPrices) - prices[i];
    if (result < max) {
      result = max;
    }
  }
  return result > 0 ? result : 0;
};


이 책 풀이
풀이 1 브루트포스 => 시간초과
풀이 2 저점과 현재 값과의 차이 계산

*/
