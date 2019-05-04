/**
 * LeetCode 215 数组中的第K个最大元素
 */

// const fn = (arr, k) => {
//   return arr.sort((a, b) => b - a)[k - 1]
// }

/**
 * 更有效率的方式, 冒泡排序魔改
 */
const fn = (arr, k) => {
  let len = arr.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}

export default fn
