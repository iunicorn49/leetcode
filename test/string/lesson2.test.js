import subStr from '../../code/string/lesson2.js'

test('lesson2 subStr(\'00110011\')', () => {
	expect(subStr('00110011')).toBe(6)
})

test('lesson2 subStr(\'10101\')', () => {
	expect(subStr('10101')).toBe(4)
})