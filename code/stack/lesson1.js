/**
 * LeetCode 682 棒球比赛
 */

const calPoints = (arr) => {
	let result = [] // 数组来实现栈结构
	arr.forEach(item => {
		let pre1 = 0
		let pre2 = 0
		switch (item) {
		case 'C': // （一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。
			if (result.length) {
				result.pop()
			}
			break
		case 'D': // （一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
			pre1 = result.pop() || 0
			result.push(pre1, pre1 * 2)
			break
		case '+': // （一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
			pre1 = result.pop() || 0
			pre2 = result.pop() || 0
			result.push(pre2, pre1, pre1 + pre2)
			break
		default: // （一轮的得分）：直接表示您在本轮中获得的积分数。
			let n = +item ? +item : 0
			result.push(n)
		}
	})
	return result.reduce((total, current) => total += current, 0)
}

export default calPoints