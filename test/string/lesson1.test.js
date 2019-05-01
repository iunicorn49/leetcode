import revertByWorld from '../../code/string/lesson1.js'

test('lesson1 revertByWorld(\'Let\'s take LeetCode contest\')', () => {
	expect(revertByWorld('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc')
})