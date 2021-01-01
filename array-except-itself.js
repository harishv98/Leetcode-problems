/**
 * Given an array nums of n integers where n > 1,  
 * return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * @link https://leetcode.com/problems/product-of-array-except-self/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = [1], prefix = 1, suffix = 1;
  
  for(let i=1;i<nums.length;i++) {
      prefix *= nums[i-1];
      res.push(prefix);
  }
  
  for(let i=nums.length-2;i>-1;i--) {
      suffix *= nums[i+1];
      res[i] *= suffix;
  }
  return res;
};