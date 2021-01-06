/**
 * Verifying an Alien Dictionary
 * 
 * In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. 
 * The order of the alphabet is some permutation of lowercase letters.
 * 
 * Given a sequence of words written in the alien language, and the order of the alphabet, 
 * return true if and only if the given words are sorted lexicographicaly in this alien language.
 * 
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * Output: true
 * 
 * Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * Output: false
 * 
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  for(let i=0;i<words.length-1;i++) {
      for(let j=0;j<Math.max(words[i].length, words[i+1].length); j++) {
          let a = order.indexOf(words[i][j]), b = order.indexOf(words[i+1][j])
          if(a == b) continue;
          if(a < b) break;
          else return false;
      }
  }
  return true;
};