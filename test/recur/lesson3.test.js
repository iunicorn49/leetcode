import words from '../../code/recur/lesson3'

test('串联所有单词的子串', () => {
	expect(words('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
	expect(words('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})
