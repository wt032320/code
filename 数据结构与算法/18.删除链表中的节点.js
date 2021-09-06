/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 使用双指针
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let pre = head // 指向当前遍历到的节点的前一个节点
  let current = head // 指向当前遍历到的节点
  let index = 0 // 用于标记要删除的节点是否为第一个节点
  while (current.val !== val) {
      pre = current
      current = current.next
      index++
  }
  if (index === 0) {
      head = head.next
  } else {
      pre.next = current.next
  }
  return head
};