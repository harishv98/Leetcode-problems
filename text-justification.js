/**
 * Text Justification
 * 
 * Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * For the last line of text, it should be left justified and no extra space is inserted between words.
 * 
 * @link https://leetcode.com/problems/text-justification/
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, k) {
  let sentences = [], sentence = "", currlen=0;
      for(let i=0;i<words.length;i++) {
          if((currlen && currlen + words[i].length + 1 <= k) || (!currlen && currlen + words[i].length <= k)) {
              if(currlen + words[i].length != k && sentence!="") {
                  currlen += 1;
                  sentence += " " + words[i];
              } else {
                  sentence += words[i];
              }
              currlen += words[i].length
          } else {
              currlen = words[i].length;
              sentences.push(sentence);
              sentence = words[i];
          }
      }
      if(sentence.length) {
          sentences.push(sentence);
      }
      
      return sentences.map((s,i) => {
          if(i == sentences.length-1) {
              return s + Array(k-s.length).fill(" ").join('');
          }
          let numSpace = 0;
          if(s.length <= k) {
              numSpace = k - s.length;
              let grp = s.split(" ");
              let space = Math.floor(numSpace/((grp.length-1) || 1));
              let extras = numSpace%(grp.length-1);
              if(grp.length == 1 && space) {
                  space -=1;
                  s += " ";
              }
              s = [...s].map(char => {
                  if(char == " ") {
                      for(let t=0;t<space;t++) {
                          char += " "
                      }
                      if(extras > 0) {
                          extras -= 1;
                          char += " ";
                      }
                  }
                  return char;
              }).join("");
          }
          
          return s;
      })
};