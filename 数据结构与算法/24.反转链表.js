/**
 *  思路: 使用双指针遍历
 *    1. 设置 cur = head pre = null
 *    2. 使用 temp 暂存 cur 的后继节点  temp = cur.next
 *    3. 修改 cur 的指向  cur.next = pre
 *    4. 使用 pre 暂存 cur pre = cur
 *    5. 访问下一个节点； cur = temp
 *    6. 重复 2-5 直到cur === null 跳出循环 并返回 pre
 *    
 *  复杂度分析: 
 *    时间复杂度: O(N)
 *    空间复杂度：O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head

  let cur = head
  let pre = null

  while (cur !== null) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};