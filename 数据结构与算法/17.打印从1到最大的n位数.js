/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  const last = Math.pow(10, n)
  let arr = []
  let i = 1
  while (i < last) {
      arr.push(i)
      i++
  }
  return arr
};

console.log(printNumbers(3))