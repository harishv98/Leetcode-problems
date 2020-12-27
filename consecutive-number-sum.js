/**
 * Given a positive integer N, how many ways can we write it as a sum of consecutive positive integers?
 * 
 * Input: 5
 * Output: 2
 * Explanation: 5 = 5 = 2 + 3
 * 
 * @link https://leetcode.com/problems/consecutive-numbers-sum
 */

/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  let res = 0;
  
  for(let div = 1; ((N/div)-(div/2)) >= 0; div++) {
      let middle = Math.floor(N/div);
      
      if(div % 2 != 0 && (middle*div) == N) {
          res += 1;
      } else if(div % 2 == 0) {
          let freq = div/2;
          
          if((middle-1)*freq + (middle*freq) == N || (middle+1)*freq + (middle*freq) == N) {
              res += 1;
          }
      }
  }
  return res;
}