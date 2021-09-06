/**
 *  思路: 使用双指针
 *    1. 设置 former 指针 和 latter 指针 指向head
 *    2. former 指针先往前走 k 步
 *    3. 然后 former 和 latter 同时出发 直到 former.next === null 跳出
 *    4. 返回 latter 
 * 
 *  复杂度分析: 
 *    空间复杂度； O(1)
 *    时间复杂度:  O(N)
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let former = head
  let latter = head
  for (let i = 0; i < k; i++) {
    former = former.next
  }
  while (former !== null) {
    former = former.next
    latter = latter.next
  }
  return latter
};