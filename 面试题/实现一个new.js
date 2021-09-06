function myNew () {
  let obj = {} // 创建一个空对象
  let con = [].shift.call(arguments)  // 获取构造函数
  obj.__proto__ = con.prototype // 设置空对象的原型
  let result = con.apply(obj, arguments) // 绑定 this 并执行构造函数
  return result instanceof Object ? result : obj // 确保返回的是一个对象
}