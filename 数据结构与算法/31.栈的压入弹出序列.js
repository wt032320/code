/**
 *  解题思路:
 *    给定一个压入序列 pushed 和弹出序列 poped, 则压入/弹出栈的顺序(即排列)是 唯一确定 的
 * 
 *    考虑借用一个辅助栈 stack 模拟压入/弹出操作的排列。根据是否模拟成功，即可得到结果
 *        1.入栈操作: 按压栈序列的顺序执行
 *        2.出栈操作: 每次入栈后，循环判断" 栈顶元素=弹出序列的当前元素 "是否成立,将符合弹出序列顺序的栈顶元素全部弹出 
 *  算法流程:
 *    1.初始化： 辅助栈 stack，弹出序列的索引 i
 *    2. 遍历压栈序列： 各元素记为 num
 *      a.元素 num 入栈
 *      b.循环出栈: 若 stack 的栈顶元素 = 弹出序列元素poped[i], 则执行出栈与 i++ 
 *    3. 返回值：若 stack 为空，则弹出序列合法
 *  复杂度分析: 
 *    1.时间复杂度O(N): 其中 N 为列表 pushed 的长度；每个元素最多入栈与出栈一次，即最多共 2N 次出入栈操作。
 *    2.空间复杂度O(M): 辅助栈 stack 最多同时存储 N 个元素
 *      
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [], i = 0;
  pushed.forEach((num) => {
    stack.push(num)
    while (stack.length > 0 &&　stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i++
    }
  })
  if (!stack.length) return true
  else return false
};