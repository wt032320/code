/**
 *  方法一： 哈希表
 *     利用哈希表的查询特点，考虑构建 原链表节点 和 新链表 对应节点 的键值对映射关系，再遍历构建新链表各节点的 next 和 random 引用指向即可
 *     
 *     算法流程：
 *        1.若头节点 head 为空节点，直接返回 null
 *        2.初始化：哈希表 dic, 节点 cur 指向头节点
 *        3.复制链表：
 *          1.建立新节点，并向 dic 添加键值对（原 cur 节点，新 cur 节点）
 *          2.cur　遍历至原链表下一节点
 *        4.构建新链表的引用指向：
 *          1.构建新节点的 next 和 random 引用指向
 *          2. cur 遍历至原链表下一节点
 *        5.返回值：新链表的头节点
 *     复杂度分析：
 *        时间复杂度O(N): 两轮遍历链表，使用 O(N) 时间
 *        空间复杂度O(N): 哈希表 dic 使用线性大小的额外空间
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null
  let dic = new Map()
  let cur = head
  while (cur !== null) {
    dic.set(cur, new Node(cur.val, null, null))
    cur = cur.next
  }
  cur = head
  dic.set(null, null)
  while (cur !== null) {
    dic.get(cur).next = dic.get(cur.next)
    dic.get(cur).random = dic.get(cur.random)
    cur = cur.next
  }
  return dic.get(head)
};

/**
 *  方法二： 拼接 +　拆分
 *     考虑构建　原节点1 -> 新节点1 -> 原节点2 -> 新节点2 ->..... 的拼接链表，如此便可在访问原节点的 random 指向节点的同时找到新对应的 random 指向节点
 *     
 *     算法流程：
 *        1.复制各节点，构建拼接链表
 *        2.构建新链表各节点的 random 指向
 *          当访问原节点 cur 的随机指向节点 cur.random 时 对应新节点 cur.next 的随机指向节点为 cur.random.next
 *        3.拆分原/新链表
 *          设置 pre/cur 分别指向原/新链表头节点，遍历执行 pre.next = pre.next.next 和 cur.next = cur.next.next 将两链表分开
 *        4.返回新链表头节点 res
 *     复杂度分析：
 *        时间复杂度O(N): 三轮遍历链表，使用O(N)时间
 *        空间复杂度O(1): 节点引用变量使用常数大小的额外空间
 */

var copyRandomList1 = function(head) {
  if (!head) return null
  let cur = head
  // 1. 复制各节点，并构建拼接链表
  while (cur !== null) {
    let tmp = new Node(cur.val, null, null)
    tmp.next = cur.next
    cur.next = tmp
    cur = tmp.next
  }
  // 2. 构建各新节点的 random 指向
  cur = head
  while (cur !== null) {
    if (cur.random !== null) {
      cur.next.random = cur.random.next
    }
    cur = cur.next.next
  }
  // 3. 拆分两链表
  cur = head.next
  let pre = head,
      res = head.next
  while (cur !== null) {
    pre.next = pre.next.next
    cur.next = cur.next.next
    pre = pre.next
    cur = cur.next
  }
  pre.next = null // 单独处理原链表尾节点
  return res
};