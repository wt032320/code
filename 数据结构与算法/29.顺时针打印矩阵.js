/**
 *  解题思路: 顺时针打印矩阵的顺序是 “从左向右、从上向下、从右向左、从下向上” 循环。
 *            因此，考虑设定矩阵的“左、上、右、下”四个边界，模拟以上矩阵遍历顺序
 *  算法流程: 
 *      1.空值处理： 当 matrix 为空时，直接返回空列表 [] 即可。
 *      2.初始化： 矩阵 左、右、上、下 四个边界 l , r , t , b ，用于打印的结果列表 res 。
 *      3.循环打印： “从左向右、从上向下、从右向左、从下向上” 四个方向循环，每个方向打印中做以下三件事 （各方向的具体信息见下表） ；
 *        a. 根据边界打印，即将元素按顺序添加至列表 res 尾部；
 *        b. 边界向内收缩 1 （代表已被打印）
 *        c. 判断是否打印完毕（边界是否相遇），若打印完毕则跳出。
 *      4.返回值： 返回 res 即可。
 *  复杂度分析:
 *      时间复杂度O(MN)
 *      空间复杂度O(1)
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return []
  }
  let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1
  let res = []
  while (top <= bottom &&　left <= right) {
    // 从左向右
    for (let i = left; i <= right && top <= bottom; i++) {
      res.push(matrix[top][i])
    }
    top++
    // 从上向下
    for (let i = top; i <= bottom && left <= right; i++) {
      res.push(matrix[i][right])
    }
    right--
    // 从右向左
    for (let i = right; i >= left && top <= bottom; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    // 从下向上
    for (let i = bottom; i >= top && left <= right; i--) {
      res.push(matrix[i][left])
    }
    left++
  }
  return res
};