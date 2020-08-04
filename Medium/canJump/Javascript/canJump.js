/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + i, nums[i - 1] || 0);
    if (nums[i] >= nums.length - 1) return true;
    if (nums[i] <= i) return false;
  }
};
