
function myInstanceof(left, right) {
  let prototype = right.prototype // 获取类型的原型
  left = left.__proto__ // 获取对象的原型

  while (true) { // 一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
