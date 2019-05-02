/**
 * LeetCode 459 重复子字符串
 */

export default (str) => {
  let reg = /^(\w+)\1+$/
  return reg.test(str)
}
