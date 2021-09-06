# /**  方法一 ： 递归法
#  * 
#  *   解题思路：利用递归，先走到链表末端，回溯时依次将节点加入列表，这样就可以实现链表值的倒序输出 
#  *   复杂度分析: 
#  *       时间复杂度 O(N): 遍历链表递归 N 次
#  *       空间复杂度 O(N)； 系统递归需要使用 O(N) 的栈空间 
#  *   算法流程:
#  *     递推阶段: 每次传入 head.next 以 head == None (即走过链表尾部节点) 为终止递归条件 此时返回空列表[]
#  *     回溯阶段: 递归回溯时每次返回  当前 list + 当前节点值 [head.val]  即可实现节点的倒序输出   
#  */ 

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
      return self.reversePrint(head.next) + [head.val] if head else []

# /**  方法二 ： 辅助栈法
#  * 
#  *   解题思路： 
#         链表特点：只能从前至后访问每个节点
#         题目要求； 倒序输出 
#             这种先进后出可以借助 栈 来实现
#      算法流程:
#         入栈： 遍历链表，将各个节点值 push 入栈，
#         出栈:  将各个节点值 pop 出栈，存储于数组并返回
#  *   复杂度分析: 
#  *       时间复杂度 O(N): 入栈和出栈共使用 O(N) 的时间
#  *       空间复杂度 O(N)； 辅助栈 stack 使用 O(N)的额外空间。
#  */ 

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        stack = []
        while head:
            stack.append(head.val) # 入栈
            head = head.next
        return stack[::-1]  # 出栈
