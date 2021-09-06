// 扁平化： 将多维数组转化为一维数组

/**
 * @description: 普通递归实现扁平化
 * @param {*} array
 * @return {*}
 */
const flat = (arr) => {
  let result = []
  arr.forEach((item, i, arr) => {
    if (Array.isArray(item)) {
      result = result.concat(flat(item))
    } else {
      result.push[arr[i]]
    }
  })

  return result
}

/**
 * @description: 借助 reduce 实现扁平化
 * @param {*} array
 * @return {*}
 */
const flat1 = (arr) => {
  return arr.reduce(
    (target, current) => {
      Array.isArray(current) ? target.concat(flat(current)) : target.concat(current)
    }, []
  )
}

/**
 * @description: ... 每次只能展开最外层的数组，被 [].concat 后，arr 就扁平化一次。
 * @param {*}
 * @return {*}
 */
const flat2 = (arr) => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * @description: 该方法是利用 toString 把数组变成以逗号分隔的字符串，然后遍历数组把每一项再变回原来的类型
 * @param {*}
 * @return {*}
 */
const flat3 = (arr) => {
  return arr.toString().split(',').map(item => +item)
}