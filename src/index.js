
// You should implement your task here.

module.exports = function towelSort (matrix) {
  a = [];
  if (matrix) {
    for (i = 0; i < matrix.length; i++) {
      if (Array.isArray(matrix[i])) {
        matrix[i].sort(function(a, b) {
          console.log(i);
          if (i % 2 == 0) {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
          } else {
            if (a < b) {
              return 1;
            }
            if (a > b) {
              return -1;
            }
          }
          return 0;
        })
        for (j = 0; j < matrix[i].length; j++) {
          a.push(matrix[i][j]);
        }
        
      } else a.push(matrix[i]);
    }
  }
  return a;
}
