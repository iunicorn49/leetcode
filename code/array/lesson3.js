/**
 * LeetCode 605 种花问题
 * In: [0, 0, 0, 0, 1], n = 2
 * Out: true
 */
export default (arr, num) => {
	// 计数器
	let max = 0

	for (let i = 0, len = arr.length - 1; i < len; i++) {
		// 只有当前是空地的时候, 才能种花
		if (arr[i] === 1) continue
		// 第一块地时, 当右边没种的情况下可以种
		if (i === 0 && arr[1] === 0) {
			max++
			i++ // 因为第一块种花了, 所以, 第二块地不用看了, 直接看第三块地
		} else if (arr[i - 1] === 0 && arr[i + 1] === 0) { // 一般情况下, 看一下左右两边是否种了, 都没种的情况下, 这块地可以种
			max++
			i++
		}
	} // for end

	return num <= max
}