/**
 * 思路：
 *    选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。
 *    但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
 * 步骤:
 *    1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 *    2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 *    3. 重复第二步，直到所有元素均排序完毕。
 * 算法分析:
 *    选择排序算法是原地排序算法
 *    选择排序算法是不稳定的排序算法
 *    时间复杂度: O(n^2)
 *    空间复杂度: O(1)
 */

const selectionSort = array => {
  const len = array.length
  let minIndex, temp

  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++){
      if (array[j] < array[minIndex] ) {
        // 寻找最小数 (升序排序)
        minIndex = j // 将最小数索引保存
      }
    }
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
    console.log('array:', array)
  }
  return array
}

const array = [5, 4, 1, 3, 2]

selectionSort(array)