
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  context = context || window
  context.fn = this
  let result
  // 处理参数和 call 有区别, apply 的参数为数组
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result 
}
