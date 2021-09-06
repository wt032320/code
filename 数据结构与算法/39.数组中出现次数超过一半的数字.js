/**
 *  解题思路：
 *    方法一：使用哈希表统计数组中每个数字出现的次数
 *      复杂度分析：
 *        1.时间复杂度O(N): 对原数组一轮遍历
 *        2.空间复杂度O(N): 使用哈希表存储 需要额外 O(N) 空间
 * 
 *    方法二：摩尔投票法
 *        算法流程：
 *          1. 初始化： 票数统计 votes = 0 众数 x
 *          2. 循环： 遍历数组 nums 中的每个数字 num
 *             1. 当票数 votes 等于 0,则假设当前数字 num 是众数
 *             2. 当 num = x 时，票数 votes 自增 1; 当 num != x 时，票数 votes 自减 1
 *          3. 返回值： 返回 x 即可
 *        复杂度分析：
 *          时间复杂度O(N)
 *          空间复杂度O(1)
 */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//   const len = nums.length
//   let map = {}
//   for (let i = 0; i < len; i++) {
//     if (map[nums[i]]) map[nums[i]]++
//     else map[nums[i]] = 1
//     if (map[nums[i]] > len/2) return nums[i]
//   }
// };

// console.log(majorityElement([1,2,3,2,2,2,5,4,2]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length
  let votes = 0,
      res = 0
  for (let i = 0; i < len; i++) {
    if (votes === 0) res = nums[i]
    if (nums[i] === res) votes++
    else votes--
  }
  return res
};
