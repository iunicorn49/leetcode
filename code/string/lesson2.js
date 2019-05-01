/**
 * LeetCode 696
 * In: 00110011
 * Out: 6
 * 给定一个字符串s, 计算具有相同数量的0和1的非空连续子字符串的数量, 并且这些子字符串中的所有0和所有1都是组合在一起的
 * 00110011 => 0011 01 1100 10 0011 01 
 * 上面总共有6个
 */
export default (str) => {
	// 用来保存数据
	let r = []
	// 返回第一个符合条件的输入
	let match = (str) => {
		let j = str.match(/^(0+|1+)/)[0] // 找到第一个连续的 0 或者 连续的1
		let o = (j[0] ^ 1).toString().repeat(j.length) // 0 1 互相取反后, 补足到 j 的长度
		let reg = new RegExp(`^(${j}${o})`) // 判断str中是否存在
		if (reg.test(str)) { // 如果存在, 返回第一个匹配项
			return RegExp.$1
		} else {
			return ''
		}
	}
	for (let i = 0, len = str.length - 1; i < len; i++) {
		let sub = match(str.slice(i))
		if (sub) {
			r.push(sub)
		}
	}
	return r.length
}