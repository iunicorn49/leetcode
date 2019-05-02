import isMatch from '../../code/regexp/lesson2'

test('isMatch', () => {
  expect(isMatch('aa', 'a')).toBe(false)
  expect(isMatch('aa', 'a*')).toBe(true)
  expect(isMatch('ab', '.*')).toBe(true)
  expect(isMatch('aab', 'c*a*b')).toBe(true)
})
