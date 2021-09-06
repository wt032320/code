/**
 *  解题思路：层序遍历 + 双端队列 （奇偶层逻辑分离）
 *  算法流程:
 *    1. 特殊处理：当树的根节点为空，则直接返回空列表 []
 *    2. 初始化：打印结果列表 res, 包含根节点的双端队列 deque
 *    3. BFS循环：循环打印奇/偶数层， 当 deque 为空时跳出
 *      a. 打印奇数层：从左向右 打印，先左后右 加入下层节点
 *      b. 若 deque 为空，说明向下无偶数层 则跳出
 *      c. 打印偶数层：从右向左 打印， 先右后左 加入下层节点
 *    4. 返回 res
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var levelOrder = function(root) {
  if (!root) return []
  let res = []
  let deque = [root]
  while (deque.length) {
    let tmp = []
    let len = deque.length
    for (let i = 0; i< len; i++) {
      const node = deque.shift()
      tmp.push(node.val)
      if (node.left !== null) deque.push(node.left)
      if (node.right !== null) deque.push(node.right)
    }
    res.push(tmp)
    if (!deque.length) return res
    tmp = []
    len = deque.length
    for (let i = 0; i　< len; i++) {
      const node = deque.pop()
      tmp.push(node.val)
      if (node.right !== null) deque.unshift(node.right)
      if (node.left !== null) deque.unshift(node.left)
    }
    res.push(tmp)
  }
  return res
};
