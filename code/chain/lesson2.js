/**
 * LeetCode 141 环形链表
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

const hasCycle = (head) => {
  let slow = head // 慢指针
  let fast = head.next // 快指针
  while (true) {
    if (!fast || !fast.next) {
      return false // 不是环装
    } else if (fast === slow || fast.next === slow) {
      return true
    } else { // 如果还没到边界情况, 继续循环
      slow = slow.next
      fast = fast.next.next
    }
  }
}

export default hasCycle

export {
  Node,
  NodeList
}
