/**
 * LeetCode
 * 匹配重复子串
 */

export default (str) => {
  let reg = /^(\w+)\1+$/
  return reg.test(str)
}
