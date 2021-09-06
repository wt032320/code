/**
 * 方法一: 递归法
 * 
 * 根据二叉树镜像的定义，考虑递归遍历（dfs）二叉树，交换每个节点的左 / 右子节点，即可生成二叉树的镜像。
 * 
 * 复杂度分析:
 *   时间复杂度: O(N)
 *   空间复杂度: O(N)
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
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (!root) return root
  return fn(root)
};

const fn = (root) => {
  if (root === null) return
  [root.left, root.right] = [root.right, root.left]
  fn(root.left)
  fn(root.right)
  return root
}

/**
 *  方法二: 辅助栈
 *  
 *  利用栈（或队列）遍历树的所有节点 node ，并交换每个 nodee 的左 / 右子节点。
 * 
 *  算法流程:
 *    1.特例处理： 当 root 为空时，直接返回 null ；
 *    2.初始化： 栈（或队列），并加入根节点 root 。
 *    3.循环交换： 当栈 stack 为空时跳出；
 *      a. 出栈 记为 node
 *      b. 添加子节点: 将node 左右子节点入栈
 *      c. 交换: 交换 node 左右 子节点
 *    4. 返回根节点 root
 */