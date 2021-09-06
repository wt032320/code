/**
 *  解题思路： 
 *    1.后序遍历: 左，右，根
 *    2.二叉搜索树: 左子树中所有节点的值<根节点的值；右子树中所有节点的值>根节点的值；其左右子树也分别为二叉搜索树
 *  递归分治: 根据二叉搜索树的定义，可以通过递归，判断所有子树的 正确性 (即其后序遍历是否满足二叉搜索树的定义) 若所有子树都正确，则此序列为二叉搜索树的后序遍历
 *  
 *  递归分析:
 *    终止条件: 当 i >= j,说明此子树节点数量 <= 1, 无需判断正确性，因此直接返回 true
 *    递推工作: 
 *      1. 划分左右子树: 遍历后序遍历的 [i,j] 区间元素，寻找 第一个大于根节点的 节点 索引记为 m 此时，可划分出左子树区间 [i, m-1],右子树区间
 *         [m, j-1] 根节点索引 j
 *      2. 判断是否为二叉搜索树
 *        a. 左子树区间 [i, m-1] 内的所有节点都应 < postorder[j] (根节点)。而第 1. 划分左子树 步骤已经保证左子树区间的正确性，因此只需要判断
 *            右子树区间的正确性
 *        b. 右子树区间 [m, j-1] 内的所有节点都应 > postorder[j] (根节点)。实现方式为遍历，当遇到 <= postorder[j] 的节点则跳出；则可通过 p = j
 *            判断是否为二叉搜索树
 *  返回值: 所有子树都需要正确才可判定正确。因此使用 与逻辑符&& 连接
 *    1. p = j 判断此树正确
 *    2. recur(i, m-1): 判断 此树的左子树 是否正确
 *    3. recur(m, j-1): 判断 此树的右子树 是否正确
 * 
 *  复杂度分析:
 *    时间复杂度O(N^2): 每次调用 recur(i,j)减去一个根节点，因此递归占用O(N);最差情况下，每次递归都需要遍历所有节点，占用O(N)
 *    空间复杂度O(N): 最差情况下，递归深度将达到N
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  return recur(postorder, 0, postorder.length - 1)
};

const recur = (postorder, i, j) => {
  if (i >= j) return true
  let p = i
  while (postorder[p] < postorder[j]) {
    p++
  }
  const m = p
  while (postorder[p] > postorder[j]) {
    p++
  }
  return p === j && recur(postorder, i, m-1) && recur(postorder, m, j-1)
}

const arr = [4, 8, 6, 12, 16, 14, 10]
verifyPostorder(arr)