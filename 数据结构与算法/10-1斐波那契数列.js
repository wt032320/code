// # 解题思路:
// #   斐波那契数列的定义是 f(n + 1) = f(n) + f(n - 1)，生成第 n 项的做法有以下几种：
// #     1.递归法:
// #       原理：把 f(n) 问题的计算拆分成 f(n-1) 和 f(n-2) 两个子问题的计算 并递归 以 f(0) 和  f(1) 为终止条件
// #       缺点: 大量的重复递归计算
// #     2.记忆递归法:
// #       原理: 在递归的基础上，新建一个长度为 n 的数组，用于在递归时存储 f(0) 至 f(n) 的值 重复遇到某个数字就直接从数组中取出，避免了重复的递归计算
// #       缺点：记忆化存储需要使用 O(N) 额外的空间

/**
 * @param {number} n
 * @return {number}
 */

var arr = []
var fib = function(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } 
    if (!arr[n]) {
        arr[n] = (fib(n-1) + fib(n-2)) % 1000000007
    }
    return arr[n]
};

/**
 *  3.动态规划法
 *    
 */