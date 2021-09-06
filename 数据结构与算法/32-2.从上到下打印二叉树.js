/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let res = [] // 用于保存最终返回值
  let queue = [root] // 借助队列
  while (queue.length) {
    let tmp = [] // 用于保存每一列
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      tmp.push(node.val)
      node.left && queue.push(node.left)
      node.right &&　queue.push(node.right)
    }
    res.push(tmp)
  }
  return res
};
