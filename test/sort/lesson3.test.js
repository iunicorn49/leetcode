import sort from '../../code/sort/lesson3'

test('最大间距', () => {
  expect(sort([3, 6, 9, 1])).toBe(3)
  expect(sort([10])).toBe(0)
  expect(sort([13, 16, 19, 1])).toBe(12)
})
