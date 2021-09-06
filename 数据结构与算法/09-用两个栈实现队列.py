# 解题思路:
#   栈无法实现队列功能: 栈底元素（对应队首元素）无法直接删除，需要将上方所有元素出栈
#   双栈可以实现列表倒序: 设含有三个元素的栈 A = [1, 2, 3] 和空栈 B = []。若循环执行A元素出栈并添加入栈B,
#                       直到栈A为空，则 A = [], B = [3, 2, 1]。即栈B元素实现了栈A元素的倒序
#   利用栈B删除队首元素: 倒序后，B执行出栈相当于删除了A的栈底元素，即对应队首元素

# 函数设计:
#   设计栈A用于加入队尾工作，栈B用于将元素倒序，从而实现删除队首元素

#   加入队尾函数: appendTail()  将值val加入栈A即可
#   删除队首函数: deleteHead() 有以下三种情况
#     1.当栈B不为空：B 中仍有已完成倒序的元素，因此直接返回 B 的栈顶元素
#     2.否则，当　A 为空：即两个栈都为空，无元素，因此返回 -1
#     3.否则：将栈 A 元素全部转移至栈 B 中，实现元素倒序, 并返回栈 B　的栈顶元素

# 复杂度分析：
#   时间复杂度：appendTail() 函数为 O(1), deleteHead() 函数函数在 N 次队首元素删除操作中总共需完成 N 个元素的倒序。
#   空间复杂度: O(n) 最差情况下，栈 A 和 栈 B 共保存 N 个元素

class CQueue:

    def __init__(self):
      self.A, self.B = [], [] 

    def appendTail(self, value: int) -> None:
      self.A.append(value)

    def deleteHead(self) -> int:
      if self.B: 
        return self.B.pop()
      if not self.A: 
        return -1
      while self.A:
        self.B.append(self.A.pop())
      return self.B.pop()

# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()