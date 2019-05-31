import hasCycle, {
  NodeList
} from '../../code/chain/lesson2'

test('环形链表, true:', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9])
  head.next.next.next.next.next.next = head.next
  expect(hasCycle(head)).toBe(true)
})

test('环形链表, false:', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9])
  expect(hasCycle(head)).toBe(false)
})
