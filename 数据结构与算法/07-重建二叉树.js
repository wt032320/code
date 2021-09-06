// 方法一： 递归法

/**
 *   解题思路：
 *     前序遍历性质：节点按照[根节点 | 左子树 | 右子树]排序
 *     中序遍历性质：节点按照[左子树 | 根节点 | 右子树]排序
 *      
 *      根据以上性质：
 *        1.前序遍历的首个元素为树的根节点 node 值
 *        2.在中序遍历中搜索根节点 node 索引，可将 中序遍历 划分为 [左子树 | 根节点 | 右子树]
 *        3.根据中序遍历中的左/右子树节点数量，可以将 前序遍历 划分为 [根节点 | 左子树 | 右子树]
 * 
 *        通过以上三步，可以确定三个节点：(1.树的根节点，2.左子树根节点，3.右子树根节点)。
 *        对于树的左、右子树，仍可使用以上步骤划分子树的左右子树。
 *       
 *      以上子树的递推性质是 分治算法 的体现，考虑通过递归对所有子树进行划分。
 *       
 *      分治算法解析：
 *        1.递推参数：根节点在前序遍历的索引 root, 子树在中序遍历的左边界 left, 子树在中序遍历的右边界 right
 *        2.终止条件：当 left > right 代表已经越过页节点，此时返回 null
 *        3.递推工作：
 *           a. 建立根节点 node, 节点值为 preorder[root]
 *           b. 划分左右子树： 查找根节点在中序遍历 inorder 中的索引 i
 *           
 *            为了提高效率，可以使用哈希表存储中序遍历的值与索引的映射，查找操作的时间复杂度为O(1)
 * 
 *           c. 构建左右子树：开启左右子树递归
 *        4.返回值：回溯返回 node , 作为上一层递归中根节点的左/右子节点
 *      
 *      复杂度分析:
 *        1.时间复杂度：O(N)   其中 N 为树的节点数量。初始化 HashMap 需遍历 inorder ，占用 O(N) 。
 *          递归共建立 N 个节点，每层递归中的节点建立、搜索操作占用 O(1) ，因此使用 O(N) 时间。
 *        2.空间复杂度：O(N)   哈希表使用O(N)额外空间。最差情况下 树退化为链表，递归深度达到 N,
 *          占用O(N)额外空间，最好情况下，树为满二叉树，递归深度为 log N 占用 O(log N) 额外空间
 * 
 *      注意： 本方法只适用于'无重复节点值'的二叉树
 */ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null
  }
  let root = preorder[0]  // 根节点为前序遍历的第一个元素
  let node = new TreeNode(root) // 确定根节点
  let i = inorder.indexOf(root) // 确定根节点在中序遍历中的位置(用于分割左右子树)
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i)) // 开启左子树递归
  node.right = buildTree(preorder.slice(i +　1), inorder.slice(i + 1)) // 开启右子树递归
  return node // 回溯返回根节点 作为上一层递归中的左/右子节点
};
