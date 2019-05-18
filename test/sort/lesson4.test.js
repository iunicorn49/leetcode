import sort from '../../code/sort/lesson4'

test('缺失的第一个正数', () => {
  expect(sort([1,2,0])).toBe(3)
  expect(sort([3,4,-1,1])).toBe(2)
  expect(sort([7,8,9,11,12])).toBe(1)
  expect(sort([1, 2, 3])).toBe(4)
})
