/**
 * LeetCode 164 最大间距
 */

//  // 普通做法
// const fn = (arr) => {
// 	const len = arr.length
// 	if (len < 2) return 0
// 	arr.sort()
// 	let max = 0
// 	for (let i = 0, tmp; i < len - 1; i++) {
// 		tmp = arr[i + 1] - arr[i]
// 		if (tmp > max) max = tmp
// 	}
// 	return max
// }

 // 最优解法
 const fn = (arr) => {
	let len = arr.length
	if (len < 2) return 0
	let max = 0
	len = len - 1
	let space = 0
	for (let i = len, tmp; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			tmp = arr[j]
			if (tmp > arr[j + 1]) {
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
			}
		}
		if (i < len) {
			space = arr[i + 1] - arr[i]
			if (space > max) max = space
		}
	}
	return Math.max(max, arr[1] - arr[0])
}

export default fn
