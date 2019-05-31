/**
 * LeetCode 621 任务调度器
 */

const leastInterval = (tasks, n) => {
  let q = '' // 返回结果
  let Q = {} // 任务集合
  tasks.forEach(item => { // 用来统计相同的任务数量
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  while (true) {
    let keys = Object.keys(Q) // 所有任务种类
    if (!keys[0]) {
      break // 没有任务了, 跳出循环
    }
    // n + 1 为一组
    let tmp = [] // 组队列
    for (let i = 0; i <= n; i++) {
      let max = 0 // 最多的任务
      let key // 任务
      let pos // 任务从哪里开始
      // 从所有的任务中找到未处理数最大的优先安排
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      if (key) {
        tmp.push(key)
        keys.splice(pos, 1) // 每组任务不要出现相同的任务, 得到就删掉
        Q[key]-- // 安排过一次后, 就减少一次
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break // 跳出for循环, 寻找下一组
      }
    } // for end
    q += tmp.join('').padEnd(n + 1, '-') // 如果任务数量小于 n + 1, 需要用等待去填充('-')
  } // while end
  q = q.replace(/-+$/g, '') // 最后一个任务结束后, 不需要等待, 将末尾的 '-' 全部删掉
  return q.length
}

export default leastInterval
