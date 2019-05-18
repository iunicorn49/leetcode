import sort from '../../code/sort/lesson5'

test('缺失的第一个正数', () => {
  expect(sort([1,2,0])).toEqual([0, 1, 2])
  expect(sort([3,4,-1,1])).toEqual([-1, 1, 3, 4])
  expect(sort([7,8,9,11,12])).toEqual([7,8,9,11,12])
})
