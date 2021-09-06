/**
 *  二分法
 * 
 *  转化为位运算：
 *      1.向下整除 n // 2 等价于 右移一位 n >> 1 ；
 *      2.取余数 n % 2 等价于 判断二进制最右一位值 n & 1
 * 
 *  算法流程:
 *      1. 当 x = 0 时，直接返回零
 *      2. 初始 res = 1
 *      3. 当 n < 0 时: 把问题转化至n >= 0 的范围内，即执行 x = 1 / x, n = -n
 *      4. 循环计算 当 n =  0 时时跳出
 *        a. 当 n && 1 = 1时: 将当前 X 乘入 res （即 res *= x）
 *        b. 执行 x = x^2 （即 x *= x）
 *        c. 执行n 右移一位 （n >> 1）
 *      5. 返回 res
 * 
 *  算法分析:
 *     时间复杂度: O(log2N)
 *     空间复杂度: O(1)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x == 0) {
    return 0
  }
  let res = 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  while (n > 0) {
    if (n & 1) {
      res *= x
    }
    x *= x
    n = n >>> 1
  }
  return res
};