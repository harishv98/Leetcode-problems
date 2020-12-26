/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * @link https://leetcode.com/problems/trapping-rain-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let prefix = [], suffix = [];
  
  for(let i=0;i<height.length;i++) {
      prefix[i] = Math.max(height[i], (prefix[i-1] || 0));
  }
  
  for(let i=height.length-1;i>=0;i--) {
      suffix[i] = Math.max(height[i], (suffix[i+1] || 0));
  }
  
  return height.reduce((res, val, i) => {
      res += (Math.min(prefix[i], suffix[i]) - val)
      return res;
  },0);
};