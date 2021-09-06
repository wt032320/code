/**
 *  原型链的问题：
 *      1. 当原型链中包含引用类型值的原型时，该引用类型值会被所有实例所共享
 *      2. 在创建子类型时，不能向超类型(父类)的构造函数中传递参数 
 * 
 *  解决方法：
 *      为解决原型链中上述两个问题, 我们开始使用一种叫做 “借用构造函数(constructor stealing)”  的技术
 *    基本思想：在子类构造函数中调用超类的构造函数
 */

function Father () {
  this.colors = ['red', 'blue', 'green']
}

function Son () {
  Father.call(this) // 继承了Father,且向夫类型传递参数
}

/**
 *    借用构造函数继承的问题：
 *       方法都在构造函数中定义, 因此函数复用也就不可用了.而且超类型(如Father)中定义的方法,对子类型而言也是不可见的
 * 
 *    解决方法： 组合继承
 *        基本思想：使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.
 */

function Father (name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Father.prototype.sayName = function () {
  alert(this.name)
}

function Son (name, age) {
  Father.call(this, name) // 继承父类的实例属性, 第一次调用 Father()
  this.age = age
}

Son.prototype = new Father() // 继承父类的方法，第二次调用 Father()
Son.prototype.sayAge = function () {
  alert(this.age)
}

/**
 *  组合继承优点：避免了原型链和借用构造函数的缺陷,融合了它们的优点,成为 JavaScript 中最常用的继承模式. 
 *               而且, instanceof 和 isPrototypeOf( )也能用于识别基于组合继承创建的对象.
 *  不足：组合继承其实调用了两次父类构造函数, 造成了不必要的消耗,
 */

/**
 *   原型继承：借助原型可以基于已有的对象创建新对象， 同时还不必因此创建自定义类型. 
 *   
 *   基本思路：在object()函数内部, 先创建一个临时性的构造函数, 
 *            然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例.
 */

function object (o) {
  function F () {}
  F.prototype = o
  return New F()
}

/**
 *  从本质上讲, object() 返回了一个引用传入对象的新对象. 这样可能带来一些 "共享数据" 的问题
 */

var person = {
	friends : ["Van","Louis","Nick"]
};

var anotherPerson = object(person);
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.friends.push("Style");
alert(person.friends);//"Van,Louis,Nick,Rob,Style"

/** 
 *  在这个例子中,可以作为另一个对象基础的是person对象,于是我们把它传入到object()函数中,
 *  然后该函数就会返回一个新对象. 这个新对象将person作为原型,因此它的原型中就包含引用类型值属性. 
 *  这意味着person.friends不仅属于person所有,而且也会被anotherPerson以及yetAnotherPerson共享.
 */

/**
 *  在 ECMAScript5 中,通过新增 object.create() 方法规范化了上面的原型式继承.
 *  
 *  object.create() 接收两个参数:
 *     1.一个用作新对象原型的对象
 *     2.一个为新对象定义额外属性的对象(可选的)
 */

var person = {
	friends : ["Van","Louis","Nick"]
};
var anotherPerson = Object.create(person);
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.friends.push("Style");
alert(person.friends);//"Van,Louis,Nick,Rob,Style"

/**
 *  object.create() 只有一个参数时功能与上述object方法相同, 
 *  它的第二个参数与Object.defineProperties()方法的第二个参数格式相同: 
 *  每个属性都是通过自己的描述符定义的.以这种方式指定的任何属性都会覆盖原型对象上的同名属性
*/

var person = {
	name : "Van"
};
var anotherPerson = Object.create(person, {
	name : {
		value : "Louis"
	}
});
alert(anotherPerson.name);//"Louis"

/**
 * 原型式继承中, 包含引用类型值的属性始终都会共享相应的值, 就像使用原型模式一样. 
 */

/**
 *  寄生式继承：
 *    寄生式继承的思路与(寄生)构造函数和工厂模式类似, 即创建一个仅用于封装继承过程的函数,
 *    该函数在内部以某种方式来增强对象,最后再像真的是它做了所有工作一样返回对象. 如下.
 */

function createAnother(original){
	var clone = object(original);//通过调用object函数创建一个新对象
	clone.sayHi = function(){//以某种方式来增强这个对象
		alert("hi");
	};
	return clone;//返回这个对象
}

/**
 *  使用寄生式继承来为对象添加函数, 会由于不能做到函数复用而降低效率;这一点与构造函数模式类似.
 */

/**
 *  寄生组合式继承
 *    组合继承是 JavaScript 最常用的继承模式; 不过, 它也有自己的不足. 组合继承最大的问题就是无论什么情况下,
 *    都会调用两次父类构造函数: 一次是在创建子类型原型的时候, 另一次是在子类型构造函数内部. 
 *    寄生组合式继承就是为了 降低调用父类构造函数的开销  而出现的 .
 *    
 *    基本思路：不必为了指定子类型的原型而调用超类型的构造函数
 */

function extend(subClass,superClass){
	var prototype = object(superClass.prototype);//创建对象
	prototype.constructor = subClass;//增强对象
	subClass.prototype = prototype;//指定对象
}

/**
 * extend的高效率体现在它没有调用superClass构造函数,
 * 因此避免了在subClass.prototype上面创建不必要,多余的属性. 
 * 于此同时,原型链还能保持不变; 因此还能正常使用 instanceof 和 isPrototypeOf() 方法.
 */
