/**
 * 插入排序的工作原理：通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 * 
 * 步骤：
 *    1. 从第一个元素开始，该元素可以认为已经被排序
 *    2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
 *    3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
 *    4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
 *    5. 将新元素插入到该位置后；
 *    6. 重复步骤 2 ~ 5。
 * 
 *  算法分析:
 *    直接插入排序是原地排序算法
 *                是稳定排序算法
 *    时间复杂度； O(N^2)
 *    空间复杂度: o(1)
 */

const insertionSort = array => {
  const len = array.length
  if (len <= 1) return 

  let preIndex, current

  for (let i = 1; i < len; i++) {
    preIndex = i - 1 // 待比较元素下标 (已有序元素)
    current = array[i] // 当前元素、
    while (preIndex >= 0 &&  array[preIndex] > current) {
      // 待比较元素 大于当前元素 
      array[preIndex + 1] = array[preIndex] // 将已有序元素后移
      preIndex-- // 游标前移
    }
    if (preIndex + 1 != i) {
      // 避免同一元素赋值给自身
      array[preIndex + 1] = current // 将当前元素插入到空位
      console.log('array:', array)
    }
  }
  return array
}

const array = [5, 4, 1, 3, 2]

insertionSort(array)