/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let dp = Array(nums.length).fill(0);
  dp[0] = 1;
  let answer = 1;

  for (let i = 1; i < dp.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    answer = Math.max(answer, dp[i]);
  }

  return answer;
};
