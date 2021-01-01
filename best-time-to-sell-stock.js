/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
 * design an algorithm to find the maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0, min = Infinity;
  
  for(let i=0;i<prices.length;i++) {
      min = Math.min(min, prices[i]);
      
      if(min != prices[i]) {
          profit = Math.max(profit, prices[i]-min);
      }
  }
  return profit;
};