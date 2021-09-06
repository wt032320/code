/**
 *  解题思路： 
 *     方法一：使用排序算法对数组排序，然后返回前 k 个数
 *     复杂度分析：
 *        时间复杂度O(N log N): 快速排序算法的时间复杂度为O(NlogN)
 *        空间复杂度O(N): 快速排序的递归深度最好（平均）为 O(logN) ，最差情况（即输入数组完全倒序）为 O(N)。
 * 
 *     方法二：基于快速排序的数组划分
 *        题目只要求返回最小的 k 个数，对这 k 个数的顺序并没有要求。因此，只要将数组划分为 最小的 k 个数和 其他数字 两部分即可，而快速排序的
 *        哨兵划分可完成此目标
 *        根据快速排序原理，如果某次哨兵划分后 基准数正好是第 k+1 小的数字，那么此时基准数左边的所有数字便是题目所要求的 最小的 k 个数
 *        根据此思路，考虑在每次哨兵划分之后，判断基准数在数组中的索引是否等于k,若 true 则直接返回此时数组的前 k 个数字
 */

var getLeastNumbers = function(arr, k) {
  let result = quickSort(arr).slice(0, k)
  return result
};

const quickSort = (arr, left = 0, right) => {
    right = right || arr.length
    if (left < right - 1) {
      const partitionIndex = partition(arr, left, right)
      quickSort(arr, left, partitionIndex)
      quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}

const partition = (arr, left, right) => {
  const poivt = arr[right - 1]
  let index = left - 1 // 指针初始位置为 -1
  for (let i = left; i < right - 1; i++) {
    if (arr[i] <= poivt) {
      // 循环数组，找到比基准点小(或等于)的元素，就将 index 加1 然后交换 当前元素 与 index所指的元素
      index++
      swap(arr, index, i)
    }
  }
  // 循环结束后，将基准点(pivot)与index+1位置的元素进行交换位置
  swap(arr, index + 1, right - 1)
  return index + 1
}

const swap = (arr, i, j) => {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
