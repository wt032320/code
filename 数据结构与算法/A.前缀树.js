class Node { //  节点类
  constructor(isWord = false) {
    this.isWord = isWord // 该节点是否是单词结尾
    this.next = new Map() // 子孩子使用 Map 存储
  }
}

class Trie { // 实例类
  constructor() {
    this.root = new Node()
  }

  // 往Trie里增加单词(add)
  add(word) {
    const _helper = (node, word) => {
      if (word === '') { // 递归到底，单词已经不能拆解了
        node.isWord = true // 将上一个字符记为单词结尾
        return
      }

      const c = word[0] // 从单词首字母开始
      if　(!node.next.has(c)) { // 如果孩子节点里不包含该字符
        node.next.set(c, new Node()) // 设置为新的孩子节点
      }
      _helper(node.next.get(c), word.slice(1)) // 继续拆解单词的其他字符
    }
    _helper(this.root, word) // 加入到根节点之下
  }
}
