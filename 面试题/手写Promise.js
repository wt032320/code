const PENDING = 'pending' // 等待状态
const RESOLVED = 'resolved' // 完成了
const REJECTED = 'rejected' // 拒绝了

function MyPromise(fn) {
  const that = this  // 因为代码可能会异步执行 that 用于获取正确的 this 对象
  that.state = PENDING // Promise 的初始状态
  that.value = null // 保存 resolve 或者 reject 中传入的值
  that.resolvedCallbacks = [] // resolvedCallbacks 和 rejectedCallbacks 用于保存 then 中的回调,因为 当执行完 Promise 时,
  that.rejectedCallbacks = [] // 状态可能还是等待中, 这时候应把 then 中的回调保存起来用于状态改变时使用

  // resolve 函数
  function resolve(value) {
    if (that.state === PENDING) { // 判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态
      that.state = RESOLVED // 将当前状态更改为对应状态
      that.value = value // 并将传入的值赋给 value
      that.resolvedCallbacks.map(cb => cb(that.value)) // 遍历回调数组并执行
    }
  }

  // reject 函数
  function reject(value) {
    if (that.state === PENDING) { // 判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态
      that.state = REJECTED // 将当前状态更改为对应状态
      that.value = value // 并将传入的值赋给 value
      that.resolvedCallbacks.map(cb => cb(that.value)) // 遍历回调数组并执行
    }
  }

  // Promise参数(fn函数)
  try {
    fn(resolve, reject) // 执行传入的参数并且将之前两个函数当做参数传进去
  } catch (error) {
    reject(e) // 可能执行函数过程中会遇到错误，需要捕获错误并且执行 reject 函数
  }

  // then 函数
  MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
    // 判断两个参数是否为函数类型,因为这两个参数是可选类型 
    // 当参数不是函数类型时，需要创建一个函数赋值给对应的参数，同时也实现了透传
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = 
      typeof onRejected === 'function'
      ? onRejected
      : r => {
          throw r
        }
    
    // 状态是等待态的话，就往回调函数中 push 函数，比如如下代码就会进入等待态的逻辑
    if (that.state === PENDING) {
      that.resolvedCallbacks.push(onFulfilled)
      that.rejectedCallbacks.push(onRejected)
    }

    // 当状态不是等待态时，就去执行相对应的函数。
    if (that.state === RESOLVED) {
      onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
      onRejected(that.value)
    }
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 0)
}).then(value => {
  console.log(value)
})
