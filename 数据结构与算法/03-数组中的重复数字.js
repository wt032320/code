/*
 * @Author: your name
 * @Date: 2020-12-11 16:48:22
 * @LastEditTime: 2021-01-22 16:17:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\03-数组中的重复数字.js
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一: 使用 双重 for 循环 暴力求解
// 时间复杂度: O(n^2) 空间复杂度: O(1)
// var findRepeatNumber = function(nums) {
//   for(let i = 0;i < nums.length; i++) {
//     let flag = nums[i]
//     for (let j = i + 1; j < nums.length; j++){
//       if(nums[j] === flag) {
//         return flag
//       }
//     }
//   }
// };

// 方法二：使用哈希表
// 哈希表的结构是：number-boolean, number 就是数组中的数字，boolean代表数字是否出现过
// 思路是: 遍历数组中的数字，检查是否出现过，如果没有出现，就将该数加入到哈希表中，如果出现过 就返回该数
// 时间复杂度: O(n)  空间复杂度: O(n)
var findRepeatNumber = function(nums) {
  let map = {}
  for (let num of nums) {
    if ( !map[num] ) {
      map[num] = true
    } else {
      return num
    }
  }
};
let nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))