/**
 * LeetCode 922 奇偶排序
 */

const fn = (arr) => {
  let result = new Array(arr.length)
  let odd = 1 // 奇数下标
  let even = 0 // 偶数下标
  arr.forEach((item, index) => {
    if (item % 2 === 0) { // 偶数
      result[even] = item
      even += 2
    } else { // 奇数
      result[odd] = item
      odd += 2
    }
  })
  return result
}

export default fn
