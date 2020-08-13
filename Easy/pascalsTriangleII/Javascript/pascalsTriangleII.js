/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  let previous = [1, 1];
  for (let i = 2; i < rowIndex + 1; i++) {
    let row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = previous[j] + previous[j - 1];
    }
    previous = row;
  }

  return previous;
};
