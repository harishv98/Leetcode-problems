/**
 * Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var numIslands = function(matrix) {
  let cnt = 0;
  
  function findNeig(i,j,type = null) {
      matrix[i][j] = 0;

      if(matrix[0].length-1 > j && matrix[i][j+1] == 1) {
          findNeig(i, j+1);
      }
      if(matrix.length-1 > i && matrix[i+1][j] == 1) {
          findNeig(i+1, j);
      }
      if(i > 0 && matrix[i-1][j] == 1) {
          findNeig(i-1, j);
      }
      if(j > 0 && matrix[i][j-1] == 1) {
          findNeig(i, j-1);
      }
  }

  matrix.forEach((row,i) => {
      row.forEach((val, j) => {
          if(val == 1) {
              findNeig(i, j);
              cnt += 1;
          }
      })
  })
  return cnt;
};