let arr = [4, 3, -1, 1]
// index = 6
let index = 0
// const fn = arr => {
// 	if (arr.length < 2) return arr
// 	let left = []
// 	index++
// 	let right = []
// 	index++
// 	let flag = arr[0]
// 	for (let i = 1, len = arr.length; i < len; i++) {
// 		if (arr[i] > flag) {
// 			right.push(arr[i])
// 		} else {
// 			left.push(arr[i])
// 		}
// 	}
// 	return [...fn(left), flag, ...fn(right)]
// }

let fn = (arr) => {
	let change = (arr, i, j) => {
		let tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}

	let findCenterIndex = (arr, left, right) => {
		let flag = arr[left]
		let idx = left + 1
		for (let i = idx; i <= right; i ++) {
			if (arr[i] < flag) {
				change(arr, i, idx)
				idx++
			}
		}
		change(arr, left, idx - 1)
		return idx
	}

	let sort = (arr, left, right) => {
		if (left < right) {
			let center = findCenterIndex(arr, left, right)
			sort(arr, left, center - 1)
			sort(arr, center, right)
		}
	}
	sort(arr, 0, arr.length - 1)
	return arr
}

console.log(fn(arr))