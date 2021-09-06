/**
 *  解题思路: 若树B是树A的子结构，则子结构的根节点可能为树A的任意一个节点，
 *            因此，判断树 B是否是树 A的子结构，需完成以下两步工作：
 *             1. 先序遍历树A中的每个节点 nA ,对应函数 isSubStructure(A, B)
 *             2. 判断树A中以 nA为根节点的子树 是否包含树 B，对应函数 recur(A, B)
 * 
 *  算法流程: 
 *     名词规定：树 A 的根节点记作 节点 A ，树 B 的根节点称为 节点 B
 *     recur函数；
 *      a. 终止条件
 *        1. 当节点B为空：说明树 B 已匹配完成(越过叶子节点)，因此返回 true
 *        2. 当节点A为空: 说明已越过树A 的叶子节点，即匹配失败 返回 false
 *        3. 当节点A和节点B的值不同: 说明匹配失败 返回 false
 *      b. 返回值
 *        1. 判断 A 和 B 的左子节点是否相等，即 recur(A.left, B.left)
 *        2. 判断 A 和 B 的右子节点是否相等，即 recur(A.right, B.right)
 *     isSubStructure(A, B) 函数：
 *      a. 特殊处理: 当树 A 为空或 树 B 为空时， 直接返回 false
 *      b. 返回值: 若树 B 是树 A 的子结构，则必满足以下三种情况之一，因此用或 || 连接
 *        1. 以 节点 A 为根节点的子树 包含树 B ，对应 recur(A, B)
 *        2. 树 B 是 树 A 左子树 的子结构，对应 isSubStructure(A.left, B)；
 *        3. 树 B 是 树 A 右子树 的子结构，对应 isSubStructure(A.right, B)
 *  复杂度分析:
 *      时间复杂度: O(MN) 其中 M,N 分别为树 A 和 树 B 的节点数量；先序遍历树 A 占用 O(M) ，每次调用 recur(A, B) 判断占用 O(N)
 *      空间复杂度: O(M)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) {
    return false
  }
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

const recur = (A, B) => {
  if (!B) {
    return true
  }
  if (!A || A.val !== B.val) {
    return false
  }
  return recur(A.left, B.left) && recur(A.right, B.right)
}
