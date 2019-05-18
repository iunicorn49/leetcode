/**
 * LeetCode 41 缺失的第一个正数
 */

// 精简写法
// const fn = (arr) => {
// 	// 过滤掉非正整数
// 	arr = arr.filter(item => item > 0)
// 	// 判断过滤后的数组是否为空
// 	if (!arr.length) return 1

// 	arr.sort((a, b) => a - b)
// 	if (arr[0] !== 1) return 1
// 	const len = arr.length
// 	for (let i = 1; i < len; i++) {
// 		if (arr[i] - arr[i - 1] !== 1) {
// 			return arr[i - 1] + 1
// 		}
// 	}
// 	// 如果数组是连续的正整数 [1, 2, 3] 返回最后一个值加1, 就是4
// 	return arr[len - 1] + 1
// }

// 性能更好的做法

const fn = (arr) => {
	arr = arr.filter(item => item > 0)
	// 选拿到最小值, 如果第一个元素不是1 直接返回1
	for (let i = 0, len = arr.length, min; i < len; i++) {
		min = arr[i]
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < min) {
				let c = min
				min = arr[j]
				arr[j] = c
			}
		}
		arr[i] = min
		if (i > 0) {
			if (arr[i] - arr[i - 1] > 1) return arr[i - 1] + 1
		} else {
			if (min !== 1) return 1
		}
	}
	return arr.length ? arr[arr.length - 1] + 1 : 1
}

export default fn