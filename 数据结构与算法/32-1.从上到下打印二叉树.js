/**
 *  解题思路: 使用广度优先搜索 (BFS)
 *    BFS 通常借助 队列 的先进先出特性来实现
 *  
 *  算法流程：
 *    1. 特殊处理：当书的根节点为空，则返回空列表 []
 *    2. 初始化: 打印结果列表 res = [] 包含根节点的队列 queue = []
 *    3. BFS循环： 当队列 queue 为空时跳出
 *       a. 出队：队首元素出队，记为 node
 *       b. 打印：将 node.val 添加至列表 res 尾部
 *       c. 添加子节点： 若 node 的左（右）子节点不为空，则将左（右）子节点加入队列 queue
 *    4. 返回 res
 *  复杂度分析:
 *    时间复杂度O(N): N 为二叉树节点的数量 即 BFS 需要循环 N 次
 *    空间复杂度O(N): 最差情况下，即当树为平衡二叉树时，最多有 N/2 个树节点同时在 queue 中，使用 O(N) 大小的额外空间。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res
};