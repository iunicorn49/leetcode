/**
 * LeetCode 557
 * In: Let's take LeetCode contest
 * Out: s'teL ekat edoCteeL tsetnoc
 */
/** 正则解法 */
export default (str) => {
	// 1.字符串按空格分割 match(/[\w']+/g) 识别所有字母 + " ' " 
	// 2.对数组进行遍历, 对每个元素进行反转
	return str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}

/** 精简解法 */
// export default (str) => {
// 	// 1.字符串按空格分割
// 	// 2.对数组进行遍历, 对每个元素进行反转
// 	return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }

/** 传统解法 */
// export default (str) => {
// 	// 字符串按空格分割
// 	let arr = str.split(' ')
// 	let result = arr.map(item => {
// 		// 对数组进行遍历, 对每个元素进行反转
// 		return item.split('').reverse().join('')
// 	})
// 	return result.join(' ')
// }