/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 * @link https://leetcode.com/problems/merge-intervals
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {    
  intervals.sort(([x1,_], [x2,_]) => x1-x2);
  let res = [intervals[0]];

  for(let i=1;i<intervals.length;i++) {
      let 
        [x1, y1] = res[res.length-1],
        [x2, y2] = intervals[i];
      
      if(y1 >= x2) {
          res[res.length-1] = [x1, Math.max(y1,y2)];
      } else {
          res.push([x2,y2]);
      }
  }
  return res;
};