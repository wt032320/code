/**
 *  解题思路: 使用回溯法解决，其包含 先序遍历 + 路径记录 两部分
 *  
 *    1.先序遍历：按照 根 左 右 的顺序，遍历树的所有节点
 *    2.路径记录：在先序遍历中，记录从根节点到当前节点的路径。当路径为根节点到叶节点形成的路径 且 各节点值的和等于目标值 sum 时，将此路径加入结果列表
 *  
 *  算法流程:
 *    pathSum(root, sum) 函数：
 *      a. 初始化： 结果列表 res, 路径列表 path
 *      b. 返回值： 返回 res
 *    recur(root, tar) 函数：
 *      a. 递推参数：当前节点 root， 当前目标值 tar
 *      b. 终止条件：若 root 为空 直接返回
 *      c. 递推工作：
 *        1.路径更新：将当前节点值 root.val　加入路径 path
 *        2.目标值更新：tar = tar - root.val (即目标值 tar 从 sum 减至 0)
 *        3.路径记录：当 root 为叶节点 且 路径和 等于目标值，则将此路径 path 加入 res
 *        4.先序遍历：递归左/右字节点
 *        5.路径恢复：向上回溯前，需要将当前节点从路径 path 中删除，即执行 path.pop()
 *  复杂度分析：
 *    时间复杂度O(N): N为二叉树的节点数，先序遍历所有节点
 *    空间复杂度O(N): 最差情况下，即树退化为链表时，path 存储所有树节点，使用 O(N) 额外空间。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
  let res = []
  let path = []
  return recur(root, target, path, res)
};

const recur = function(root, tar, path, res) {
  if (!root) return []
  path.push(root.val)
  tar = tar - root.val
  if (!root.left && !root.right && tar === 0) {
    res.push([...path])
  }
  recur(root.left, tar, path, res)
  recur(root.right, tar, path, res)
  path.pop()
  return res
}