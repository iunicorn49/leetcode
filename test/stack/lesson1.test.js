import calPoints from '../../code/stack/lesson1'

test('棒球比赛', () => {
  expect(calPoints([5, 2, 'C', 'D', '+'])).toBe(30)
  expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
  expect(calPoints(['+', '+', 'C', 'D'])).toBe(0)
  expect(calPoints([1, '+', 'D'])).toBe(4)
})
