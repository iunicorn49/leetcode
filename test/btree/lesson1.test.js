import { Tree } from '../../code/btree/lesson1'

test('btree1:', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  expect(Tree.isSymmetric(root)).toBe(true)
})

test('btree2:', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 5])
  expect(Tree.isSymmetric(root)).toBe(false)
})
