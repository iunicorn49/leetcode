import flower from '../../code/array/lesson3.js'

test('lesson3 flower([1, 0, 0, 0, 1], 1)', () => {
  expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('lesson3 flower([1, 0, 0, 0, 1], 2)', () => {
  expect(flower([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('lesson3 flower([1, 0, 0], 1)', () => {
  expect(flower([1, 0, 0], 1)).toBe(false)
})
