/**
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 * 
 * You have the following three operations permitted on a word:
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * 
 * @link https://leetcode.com/problems/edit-distance/
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let dp =  Array(word1.length+1).fill(1).map(_ => []);
  function getDp(i, j) {
      return dp[i][j] ? dp[i][j] : findMin(i,j)
  }

  function findMin(i, j) {
      if(i==0) return j;
      if(j==0) return i;
      
      if(dp[i][j]) return dp[i][j];
      if(word1[i-1] == word2[j-1]) dp[i][j] = getDp(i-1,j-1);
      else dp[i][j] = Math.min(getDp(i,j-1), getDp(i-1,j), getDp(i-1,j-1))+1;

      return dp[i][j];
  }
  return findMin(word1.length, word2.length);
};