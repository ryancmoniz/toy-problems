module.exports =  makeChange = function(total){
  let coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let combos = new Array(total+1).fill(0)
  combos[0] = 1;

  for (let i = 0; i < coins.length; i++) {
      for (let j = coins[i]; j <= total; j++) {
        combos[j] = combos[j] + combos[j - coins[i]]
      }
  }
  console.log(combos)
  return combos[total]
}