/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let board = makeBoard(m, n);
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      board[i][j] = board[i - 1][j] + board[i][j - 1];
    }
  }
  return board[n - 1][m - 1];
};

var makeBoard = function (m, n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        board[i].push(1);
      } else {
        board[i].push(0);
      }
    }
  }
  return board;
};
