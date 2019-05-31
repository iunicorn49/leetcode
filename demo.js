class Node { // 节点
  constructor (value) {
    this.val = value
    this.next = undefined
  }
}

class NodeList { // 链表
  constructor (arr) {
    // 声明链表表的头部节点
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head // 如果一个类返回了一个对象, 那么诞生的实例, 就是这个对象
  }
}

let arr = ['A', 'B', 'C']

let ns = new NodeList(arr)

console.log(ns.next)
