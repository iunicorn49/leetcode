/**
 * LeetCode 10 正则表达式匹配
 * In: s = mississippi, p = mis*is*p*.
 * Out: false
 */

export default (s, p) => {
  const isMatch = (s, p) => {
    // 边界情况, 如果s和p都为空, 说明处理结束, 返回true
    if (p.length <= 0) {
      // return s.length > 0 ? false : true
      return !s.length // 取反, 效果和上面一样
    }
    // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
    let match = false
    if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
      match = true
    }
    // p有匹配模式
    if (p.length > 1 && p[1] === '*') {
      // 1. s* 匹配0个字符
      // 2. s* 匹配1个字符, 递归下去, 用来表示 s* 匹配多个 s
      return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    } else { // 无匹配模式
      // 如果这一层是true, 则干掉第一位, 递归继续匹配
      return match && isMatch(s.slice(1), p.slice(1))
    }
  }

  return isMatch(s, p)
}
