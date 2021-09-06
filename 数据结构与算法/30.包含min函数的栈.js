/**
 *  解题思路:
 *     本题难点: 将 min() 函数的时间复杂度降为O(1),可以通过建立辅助栈实现
 *        a. 数据栈A: 栈 A 用于存储所有元素，保证入栈 push() 函数， 出栈 pop() 函数，获取栈顶元素 top() 函数的正常逻辑
 *        b. 辅助栈B: 栈 B 中存储栈 A 中所有 非严格降序 的元素，则 栈A 中的最小元素始终对应 栈B 的栈顶元素，即 min() 函数只需要返回栈B的栈顶元素即可
 *     因此，只需要设法维护好 栈B　的元素，使其保持非严格降序，即可实现　min()  函数的 O(1) 时间复杂度
 * 
 *  函数设计:
 *     1. push(x) 函数: 重点为保持 栈B 的元素是 非严格降序 的
 *        a. 将 x 压入 栈A
 *        b. 若 栈B 为空 或 x 小于等于 栈B 的栈顶元素，则将 x 压入 栈B 
 *     2. pop() 函数: 重点为保持栈 A,B 的元素一致性
 *       a. 执行 栈A 出栈，将出栈元素记为 y
 *       b. 若 y 等于 栈B 的栈顶元素，则执行 栈B 出栈
 *     3. top() 函数: 直接返回 栈A 的栈顶元素即可
 *     4. min() 函数: 直接返回 栈B 的栈顶元素即可
 *  复杂度分析:
 *    时间复杂度O(1)
 *    空间复杂度O(N)
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */