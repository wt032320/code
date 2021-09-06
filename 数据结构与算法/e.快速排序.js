/**
 * 思想: 
 *    1. 先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，
 *        依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
 *    2. 左右分别用一个空数组去存储比较后的数据。
 *    3. 最后递归执行上述操作，直到数组长度 <= 1;
 * 特点: 快速，常用
 * 缺点: 需要另外声明两个数组，浪费了内存空间
 * 
 * 算法分析：
 *    1.在 方法二 中 使用分区函数所以不需要额外的空间 因此使用分区函数进行划分左右数组的快速排序是原地排序算法
 *    2.和选择排序相似，快速排序每次交换的元素都有可能不是相邻的，因此它有可能打破原来值为相同的元素之间的顺序。
 *     因此，快速排序并不稳定
 *    3.最佳情况：T(n) = O(n log n)。 最差情况(数组已有序)：T(n) = O(n2)。 平均情况：T(n) = O(n log n)。
 */

/**
 * @description 方法一 需要浪费额外的O(n)空间
 * @param {*} arr 
 */
const quickSort1 = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  // 取基准点
  const midIndex = Math.floor(arr.length / 2)
  //取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
  const valArr = arr.splice(midIndex, 1)
  const midIndexVal = valArr[0]
  const left = [] // 存放比基准点小的数组
  const right = [] // 存放比基准点大的数组
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // 递归执行上述操作 对左右两个数组进行操作 直至数组长度 <= 1
  return quickSort1(left).concat(midIndexVal, quickSort1(right))

}

/**
 * @description: 交换函数
 * @param {*} arr
 * @param {*} i
 * @param {*} j
 * @return {*}
 */
const swap = (arr, i, j) => {
  let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/**
 * @description: 分区函数
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @return {*}
 */
const partition = (arr, left, right) => {
  const pivot = arr[right - 1] // 设定基准点
  let index = left - 1 // 设定指针 初始位置 为 -1
  for (let i = left; i < right - 1; i++) {
    if (arr[i] <= pivot) {
      // 循环数组，找到比支点(pivot)小的数就将index向右移动一个位置，同时与下标index交换位置
      index++
      swap(arr, index, i)
    }
  }
  // 循环结束后，最后将基准点(pivot)与index+1位置的元素进行交换位置
  swap(arr, index + 1, right - 1)
  return index + 1
}


const quickSort = (arr, left = 0, right) => {
  right = right || arr.length
  if (left < right - 1) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

const array = [5, 4, 1, 3, 2]

let arr = quickSort(array)
console.log(arr)