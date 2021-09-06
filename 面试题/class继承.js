/**
 * @description: Class 实现继承
 * @param {*}
 * @return {*}
 */

// Preson 父类
class Person {
  // 将类中的属性写到 constructor(构造函数)中
  constructor (name, age) {
    this.name = name
    this.age = age
}
  // 类的方法
  showName () {
    console.log(this.name)
  }
}

// Worker 子类
class Worker extends Person {
  constructor (name, age, job) {
    // 使用super关键字来继承父类中的属性
    super(name, age)
    this.job = job
}
  // 父类中的方法 已经通过 extends 完成了继承
  showJob () {  // 子类的方法
    console.log(this.job)
  }
}