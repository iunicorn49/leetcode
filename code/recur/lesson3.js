/**
 * LeetCode 30 串联所有单词的子串
 */
const fn = (str, words) => {
	let result = [] // 保存结果
	let num = words.length // 记录数组的长度, 做边界条件计算
	// 递归函数体, r = 上一次的结果
	let range = (r, _arr) => {
		if (r.length === num) {
			result.push(r)
		} else {
			_arr.forEach((item, idx) => {
				let tmp = [..._arr]
				tmp.splice(idx, 1) // 剔除当前元素, 剩下的继续递归
				range(r.concat(item), tmp)
			})
		}
	}
	range([], words)
	return result.map(item => {
		return str.indexOf(item.join(''))
	}).filter(item => item !== -1).sort()
}

export default fn