/**
 * LeetCode 17
 * In: 23
 * Out: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 */
export default (str) => {
	// 建立电话号码键盘映射
	const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
	// 把输入字符串按单字符分割变成数组, 234 => [2, 3, 4]
	let num = str.split('')
	// 保存键盘映射后的字母内容, 如 23 => ['abc', 'dec']
	let code = []
	num.forEach(item => {
		if (map[item]) {
			code.push(map[item])
		}
	})
	let comb = (arr) => {
		// 临时变量, 用来保存数组前两位组合的结果
		let tmp = []
		// 遍历第一和第二元素
		for (let i = 0, il = arr[0].length; i < il; i++) {
			for (let j = 0, jl = arr[1].length; j < jl; j++) {
				tmp.push(`${arr[0][i]}${arr[1][j]}`)
			}
		}
		arr.splice(0, 2, tmp) // 把组合好的元素替换原始元素, 这个会更改原始数组, 那把数组是作为参数传入的
		if (arr.length > 1) {
			comb(arr)
		} else {
			return tmp
		}
		return arr[0]
	}
	return comb(code)
}