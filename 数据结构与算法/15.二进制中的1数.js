/**
 *  方法一: 逐位判断
 *     根据 与运算 定义，设二进制数字n, 则有:
 *       若 n & k = 0, 则 n 二进制 最右一位 为 0；
 *       若 n & K = 1, 则 n 二进制 最右一位 为 1；
 *    根据以上特点，考虑以下 循环判断:
 *        1. 判断 n 的最右一位是否为 1，根据结果计数
 *        2. 将 n 右移一位
 *    算法流程；
 *        1. 初始化 数量统计变量 res = 0
 *        2. 循环逐位判断 当 n = 0 时 跳出
 *           a. res += n & 1： 若 n & 1 = 1 则统计数加 1
 *           b. n >>>= 1:  将二进制数字 n 无符号右移一位
 *        3. 返回统计数量 res
 *    复杂度分析；
 *        时间复杂度； O(log2n) 逐位判断需循环 log_2 n次，其中 log_2 n代表数字 n 最高位 1 的所在位数
 *        空间复杂度； O(1)
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while (n !== 0) {
      res += n & 1
      n >>>= 1
    }
    return res
};

/**
 *  方法二: 巧用 n & (n-1)
 *      (n-1)解析: 二进制数字 n 最右边的 1 变成 0, 此 1 右边的0 都变成 1
 *      n & (n-1)解析: 二进制数字 n 最右边 的 1 都变成 0 其余不变
 *    算法流程：
 *      1. 初始化统计数量 res = 0
 *      2. 循环消去最右边的 1 当 n = 0 跳出
 *         a. res += 1 ： 统计变量加 1
 *         b. n & n - 1 ： 消去数字 n 最右边的 1
 *      3. 返回结果 res
 *    复杂度分析；
 *      时间复杂度： O(M) 循环 M 次  
 *      空间复杂度: O(1)
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0
  while (n !== 0) {
    res++
    n = n & (n - 1)
  }
  return res
};