/**
 * 解题思路: 使用 二分法 解决，其可将 遍历法 的 线性级别 时间复杂度降低至 对数级别
 * 算法流程:
 *    1. 初始化： 声明双指针 i, j 分别指向数组 number 的左右两端
 *    2. 循环二分: 设 m = (i+ｊ)/2 为每次二分的中点("/"代表向下取整除法，因此恒有 i <= m < j) 可分为以下三种情况
 *       a. 当 numbers[m] > numbers[j] 时，m 一定在 左排序数组中  旋转点 x 一定在 [m+1, j] 闭区间内 因此执行 i = m + 1
 * 　    b. 当 numbers[m] < numbers[j] 时，m 一定在 右排序数组中  旋转点 x 一定在 [i, m] 闭区间内 因此执行 j = m
 *       c. 当 numbers[m] = numbers[j] 时，无法判断 m 在那个排序数组中，即无法判断旋转点 x 在 [i,m] 还是 [m+1,j]中 解决方案: 执行 j = j - 1缩小判断范围
 *    3. 返回值: 当 i = j 时跳出二分循环，并返回旋转点值 numbers[i] 即可
 * 复杂度分析：
 *    1. 时间复杂度: O(log2 N) 在特殊情况下 例如[1,1,1,1] 会退化到 O(N)
 *    2. 空间复杂度: O(1)   i,j,m 变量使用常数大小的空间
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0,
      right = numbers.length - 1
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (numbers[mid] === numbers[right]) {
        right -= 1
      }
      if (numbers[mid] > numbers[right]) {
        left = mid + 1
      }
      if (numbers[mid] < numbers[right]) {
        right = mid
      }
    }
    return numbers[left]
};