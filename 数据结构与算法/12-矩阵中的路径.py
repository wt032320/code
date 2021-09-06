# 解题思路： 使用深度优先搜索(DFS) + 剪枝 解决
#     1. 深度优先搜索: 可以理解为暴力法遍历矩阵中所有字符串可能性。DFS 通过递归，先朝一个方向搜到底，再回溯至上个节点，沿另一个方向继续搜索，以此类推
#     2. 剪枝: 在搜索中，遇到 这条路不可能和目标字符串匹配成功 的情况，则应立即返回。称之为 可行性剪枝
#     
#     DFS解析:
#       1.递归参数：当前元素在矩阵 board 中的行列索引 i 和 j，当前目标字符在 word 中的索引 k 
#       2.终止条件:
#           (1) 返回 false: a.行或列索引越界，b.当前矩阵元素与目标字符不同，c. 当前矩阵元素已访问过  (c 可合并至 b)
#           (2) 返回 true: k = len(word) - 1， 即字符串 word 已全部匹配
#       3.递推工作:
#           (1) 标记当前矩阵元素: 将 board[i][j] 修改为 空字符 '',代表此元素已经访问过，防止之后搜索时重复访问
#           (2) 搜索下一单元格: 朝当前元素的 上 下 左 右  四个方向开启下层递归，使用 或 连接 (代表只需要找到一条可行路径就直接返
#               回 不在做后续的DFS) 并记录结果至 res
#           (3) 还原当前矩阵元素: 将 board[i][j] 元素还原至初始值， 即 work[k] 
#       4.返回值： 返回布尔值 res 代表是否搜索到目标字符串
#    复杂度分析:
#       M, N 分别为矩阵行列大小，K 为字符串 word 长度
#       (1) 时间复杂度；O(3^K MN)  最差情况下，需要遍历矩阵中长度为 K 字符串的所有方案，时间复杂度为 O(3^K)；矩阵中共有 MN个起点，时间复杂度为 O(MN)
#       (2) 空间复杂度：O(K) 搜索过程中的递归深度不超过 K 最坏情况下 K = MN 此时系统栈使用O(MN)的额外空间 

class Solution:
  def exist(self, board: List[List[str]], word: str) -> bool:
    def dfs(i, j, k):
      if not 0 <= i < len(board) or not 0 <= j < len(board[0]) or board[i][j] != word[k]: return False
      if k == len(word)-1: return True
      board[i][j] = ''
      res = dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1)
      board[i][j] = word[k]
      return res

    for i in range(len(board)):
      for j in range(len(board[0])):
        if dfs(i, j, 0): return True
    return False