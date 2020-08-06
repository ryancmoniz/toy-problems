/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  let xCoords = new Set();
  for (let [l, r, h] of buildings) {
    xCoords.add(l);
    xCoords.add(r);
  }

  xCoords = [...xCoords].sort((a, b) => a - b);
  console.log(xCoords);

  let len = buildings.length;
  let results = [[-1, 0]];

  for (x of xCoords) {
    let i = 0;
    let height = 0;

    while (i < len && buildings[i][0] <= x) {
      if (buildings[i][1] > x) {
        height = Math.max(height, buildings[i][2]);
      }
      i++;
    }
    if (results[results.length - 1][1] === height) continue;
    results.push([x, height]);
  }
  return results.slice(1);
};
