/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascal = [];

  for (let i = 0; i < numRows; i++) {
    let inner = new Array(i + 1).fill(0);
    inner[0] = 1;
    inner[inner.length - 1] = 1;

    for (let j = 1; j < inner.length - 1; j++) {
      inner[j] = pascal[i - 1][j] + pascal[i - 1][j - 1];
    }

    pascal.push(inner);
  }

  return pascal;
};
