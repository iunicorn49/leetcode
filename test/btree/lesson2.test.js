import { Tree } from '../../code/btree/lesson2'

test('btree2:', () => {
  let root = new Tree([2, 1, 3])
  expect(Tree.walk(root)).toBe(true)
})
