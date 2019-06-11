/**
 * LeetCode 98 对称二叉树
 */

// 二叉树的节点
class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}

export class Tree {
  constructor (data) {
    let root = new Node(data.shift())
    data.forEach(item => {
      this.insert(root, item)
    })
    return root
  }
  insert (node, data) {
    if (node.val > data) {
      if (node.left === null) {
        node.left = new Node(data)
      } else {
        this.insert(node.left, data)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(data)
      } else {
        this.insert(node.right, data)
      }
    }
  }
  static walk (root) {
    if (!root.left && !root.right) {
      return true
    } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val )) {
      return false
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right)
    }
  }
}
