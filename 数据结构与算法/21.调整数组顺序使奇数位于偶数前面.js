/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var exchange = function(nums) {
//   let arr = []
//   let len = nums.length
//   for (let i = 0; i <= len - 1; i++) {
//       if (nums[i] % 2 === 0) {
//           arr.push(nums[i])
//           nums.splice(i, 1)
//           console.log(nums)
//       }
//   }
//   // console.log(nums, arr)
//   return nums.concat(arr)
// };

// const array = [2,16,3,5,13,1,16,1,12,18,11,8,11,11,5,1]

// console.log(exchange(array))

/**
 * @description 双指针
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] % 2 === 1) {
      left++
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      right--
    }
  }
  return nums
};