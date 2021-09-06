/**
 *  思路： 使用两个指针分别遍历两个有序链表 由于初始状态合并链表中无节点，因此循环第一轮时无法将节点添加到合
 *        并链表中。解决方案：初始化一个辅助节点 dum 作为合并链表的伪头节点，将各节点添加至 dum 之后。
 * 
 *  算法流程:
 *    1. 初始化: 伪头节点 dum, 节点 cur 指向 dum
 *    2. 循环合并: 当 l1 或 l2 为空时跳出
 *        a. 当 l1.val < l2.val 时, cur 的后继节点指定为 l1, 并 l1 向前走一步
 *        b. 当 l1.val >= l2.val 时，cur 的后继节点指定为 l2, 并 l2 向前走一步
 *        c. 节点 cur 向前走一步，即 cur = cur.next
 *    3. 合并剩余尾部: 跳出时有两种情况 即 l1 为空或 l2 为空
 *        a. 当 l1 !== null 将 l1 添加至 cur 节点后
 *        b. 否则将 l2 添加至 cur 节点后
 *    4. 返回值: 返回 dum.next
 *  复杂度分析:
 *    时间复杂度: O(M + N) M N 分别为链表 l1,l2 的长度
 *    空间复杂度: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dum = new ListNode()
  let cur = dum

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if (l1) cur.next = l1
  if (l2) cur.next = l2
  return dum.next
};