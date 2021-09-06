/**
 *  解题思路：采用动态规划
 *    动态规划解析：
 *      1.状态定义：设动态规划列表 dp, dp[i] 代表以元素 nums[i] 为结尾的连续子数组最大和
 *          为何定义最大和 dp[i] 中必须包含元素 nums[i]: 保证 dp[i] 递推到 dp[i+1] 的正确性；如果不包含 nums[i], 递推时则不满足
 *          题目的 连续子数组 要求
 *      2.转移方程: 若 dp[i-1] <= 0 说明 dp[i-1] 对 dp[i] 产生负贡献，即 dp[i-1] + nums[i] 还不如 nums[i] 本身大
 *          当 dp[i-1] >= 0 时：执行 dp[i] = dp[i-1] + nums[i]
 *          当 dp[i-1] <= 0 时: 执行 dp[i] = nums[i]
 *      3.初始状态: dp[0] = nums[0], 即以 nums[0] 结尾的连续子数组最大和为 nums[0]
 *      4.返回值: 返回 dp 列表中的最大值，代表全局最大值
 *    复杂度分析：
 *      时间复杂度O(N): 遍历 nums 数组 需要 O(N) 时间
 *      空间复杂度O(1): 由于 dp[i] 只与 dp[i−1] 和 nums[i] 有关系，因此可以将原数组 nums 用作 dp 列表，即直接在 nums 上修改即可。
 * /

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre= cur = sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    cur = cur >= 0 ? pre + nums[i] : nums[i]
    pre = cur
    sum = Math.max(sum, pre)
  }
  return sum
};