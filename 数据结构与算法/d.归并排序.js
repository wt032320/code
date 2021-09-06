/**
 * 思想:
 *    排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，
 *    再将排好序的两部分合并在一起，这样整个数组就都有序了。
 *    
 *    归并排序采用的是分治思想
 * 算法分析；
 *    归并排序算法不是原地的排序算法
 *    归并排序算法是稳定的排序算法
 *    空间复杂度: O(N) 需要借助额外的存储空间
 *    时间复杂度: O(n log N)
 */

const mergeSort = array => {
  const len = array.length;
  if (len <  2) {
    return array;
  }
  let middle = Math.floor(len / 2),
    left = array.slice(0, middle),
    right = array.slice(middle); // 拆分为两个子数组
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  const result = []
  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}