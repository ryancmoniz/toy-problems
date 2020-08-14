/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  //Tortoise and Hair Method
  let slow = nums[0];
  let fast = nums[0];

  //Find intersection point
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  //Find entrance to cycle
  fast = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
