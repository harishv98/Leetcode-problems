/* Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters
 *
 * Input: s = "abcabcbb" 
 * Output: 3
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let cnts = {}, max = 0;
  
  for(let i=0,j=0;i<s.length;i++) {
      cnts[s[i]] = (cnts[s[i]] || 0) + 1;
      
      for(;cnts[s[i]] > 1; j++) {
          cnts[s[j]] -= 1;
      }
      max = Math.max(max, i-j+1);
  }
  return max;
};