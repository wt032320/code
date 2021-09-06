// 解法一: 不考虑二维数组排好序的特点，使用双重for循环 遍历二维数组
// 时间复杂度 O(n*m) 二维数组大小
// 空间复杂度  O(1)

// 解法二: 标志数法 
// 如果将二维数组逆时针旋转45度 并转化为图的形式 会发现其类似于 二叉搜索树， 即对于每个元素，其左分支元素更小
// 右分支元素更大。因此，通过“根节点” 开始搜索，遇到比 target 大的元素就向左，反之 向右，即可找到目标值target

// “根节点” 对应的是矩阵的 “左下角” 和 “右上角” 元素，称之为 标志数 ，以 matrix 中的 左下角元素 为标志数 flag ，则有:

// 若 flag > target ，则 target 一定在 flag 所在 行的上方 ，即 flag 所在行可被消去。
// 若 flag < target ，则 target 一定在 flag 所在 列的右方 ，即 flag 所在列可被消去。

// 算法流程：
// 1. 从矩阵 matrix 左下角元素（索引设为 (i, j) ）开始遍历，并与目标值对比：
//    当 matrix[i][j] > target 时，执行 i-- ，即消去第 i 行元素；
//    当 matrix[i][j] < target 时，执行 j++ ，即消去第 j 列元素；
//    当 matrix[i][j] = target 时，返回 truetrue ，代表找到目标值。

// 2. 若行索引或列索引越界，则代表矩阵中无目标值，返回 false

// 复杂度分析:
//  时间复杂度：O(m + n) 其中，N 和 M分别为矩阵行数和列数，此算法最多循环 M+N 次。
//  空间复杂度: O(1) i , j 指针使用常数大小额外空间。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) { 
    return false
  }
  let maxRow = matrix.length - 1 // 最大行数
  let maxCol = matrix[0].length - 1 // 最大列数
  let [row, col] = [maxRow, 0] // 将左下角设置为标志数
  while(row >= 0 && col <= maxCol) { // 需要考虑只有一行元素的情况
    if (target > matrix[row][col]) {
      // 目标数大于标志数时 消除当前列
      col++
    } else if (target < matrix[row][col]) {
      // 目标数小于标志数时 消除当前列
      row--
    } else {
      // 找到了
      return true
    }
  }
  // 越界 没有找到
  return false
};