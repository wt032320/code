
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }

  context = context || window
  context.fn = this // 改变函数的this指向
  const args = [...arguments].slice(1) // 函数的参数可能为多个
  const result = context.fn(...args) // 调用函数
  delete context.fn
  return result
}