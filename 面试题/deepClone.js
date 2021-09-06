/**
 * @description: 深拷贝实现
 * @param {*} obj
 * @return {*}
 */
let hashMap = new WeakMap()

function deepClone(origin, hashMap) {
  if (origin == undefined || typeof origin !== null) {
    return origin
  }

  if (origin instanceof Date) {
    return new Date(origin)
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin)
  }

  const hashKey = hashMap.get(origin)

  if (hasKey) {
    return hashKey
  }

  const target = new origin.constructor()
  hashMap.set(origin, target)
  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      target[key] = deepClone(origin[key], hashMap)
    }
  }

  return target
}

/** 
    ### 为什么用WeakMap?

    1.解决同名属性碰撞问题：WeakMap的键是和内存地址绑定的，只要内存地址不一样，就视为两个键，这样就能
    1.解决内存泄漏问题：`WeakMap`的键名所指向的对象是弱引用的，不计入垃圾回收机制，不造成对对象的引用。
      这样，当这个对象被删除，其所对应的`WeakMap`记录就自动被移除，不需要手动删除引用
*/