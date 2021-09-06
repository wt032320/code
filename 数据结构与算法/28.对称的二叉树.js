/**
 *  解题思路:
 *    对称二叉树的定义: 对于树中任意两个对称节点L和R 有：
 *      1. L.val === R.val
 *      2. L.left.val === R.right.val
 *      3. L.right.val === R.left.val
 *    根据以上规律，考虑自顶向下递归 判断每个节点是否对称
 * 
 *  算法流程:
 *    isSymmetric(root)
 *      1.特殊处理: 若根节点root为空，则直接返回true
 *      2.返回值: recur(root.left, root.right)
 *    recur(L, R)
 *      1.终止条件:
 *        a. 当 L 和 R 同时越过叶节点： 此树从顶至底的节点都对称，因此返回 true
 *        b. 当 L 或 R 中只有一个越过叶节点： 此树不对称，因此返回 false
 *        c. 当节点 L 值 != 节点 R 值： 此树不对称，因此返回 false
 *      2.递推工作:
 *        a. 判断两节点L.left 和 R.right 是否对称， 即 recur(l.left, R.right)
 *        b. 判断两节点L.right 和 R.left 是否对称， 即 recur(L.right, R.left)
 *      3.返回值: 两对节点都对称时，才是对称树，因此用与逻辑符 && 连接
 *  复杂度分析:
 *      时间复杂度 O(N): 其中N为二叉树节点的数量，每次执行recur()可以判断一对节点是否对称，因此最多调用 N/2 次 recur() 方法。
 *      空间复杂度 O(N)
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  return recur(root.left, root.right)
};

const recur = (L, R) => {
  if (!L && !R) return true
  if (!L || !R || L.val !== R.val) return false
  return recur(L.left, R.right) && recur(L.right, R.left)
}