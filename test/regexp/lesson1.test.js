import subLoopStr from '../../code/regexp/lesson1'

test('subLoopStr(\'abcabc\')', () => {
  expect(subLoopStr('abcabc')).toBe(true)
})

test('subLoopStr(\'abcabcd\')', () => {
  expect(subLoopStr('abcabcd')).toBe(false)
})
