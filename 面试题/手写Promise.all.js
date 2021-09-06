Promise.MyPromiseAll = function (_promises) {
  const promises = Array.from(_promises) // 将传入的迭代器对象转化为一个数组
  const resolveList = [] // 用于保存返回的Promise实例的value  value是传入所有的 promise 的value 组成的数组
  const len = promises.length
  let resolveNum = 0 // 计数器
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise) // 处理非promise
        .then(value => {
          // 保存这个promise实例的value
          resolveList[index] = value
          if (++resolveNum === len) {
            resolve(resolveList)
          }
        })
        .catch(err => reject(err))
    })
  })
}
