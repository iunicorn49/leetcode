/**
 * LeetCode 148 链表排序
 */

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

// 交换两个节点的值
const swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 寻找基准元素的节点
const partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  swap(p, begin)
  return p
}

const sort = (begin, end) => {
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export default sort

export {
  Node,
  NodeList
}
