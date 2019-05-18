/**
 * 快速排序
 */

// 普通快排
// const fn = (arr) => {
// 	let quickSort = (arr) => {
// 		let len = arr.length
// 		if (len < 2) {
// 			return arr
// 		} else {
// 			let flag = arr[0] // 选择一个标尺
// 			let left = []
// 			let right = []
// 			for (let i = 1, tmp; i < len; i++) {
// 				tmp = arr[i]
// 				if (tmp < flag) {
// 					left.push(tmp) // 比标尺小的元素扔坐边
// 				} else {
// 					right.push(tmp) // 比标尺大的元素扔右边
// 				}
// 			}
// 			return quickSort(left).concat(flag, quickSort(right)) // 递归重复执行, 直到排序完成
// 		}
// 	}
// 	return quickSort(arr)
// }

// 高级快排
// 减少递归占用的内存(不新建数组, 直接修改原数组)
const fn = (arr) => {
	// 数组指定两个位置进行值交换
	const swap = (arr, i, j) => {
		let tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}
	// 寻找标尺元素在数组遍历后, 应该存在的位置
	// left: 遍历开始的下标
	// right: 需要遍历到的最后一个元素的下标
	const findCenter = (arr, left, right) => {
		let flag = arr[left]
		let idx = left + 1
		for (let i = idx; i <= right; i++) {
			if (arr[i] < flag) {
				swap(arr, i , idx)
				idx++
			}
		}
		swap(arr, left, idx - 1)
		return idx // 最终位置
	}
	// 递归排序
	const sort = (arr, left, right) => {
		if (left < right) {
			const center = findCenter(arr, left, right)
			sort(arr, left, center - 1) // 左侧递归
			sort(arr, center, right) // 右侧递归
		}
	}
	sort(arr, 0, arr.length - 1)
	return arr
}

export default fn