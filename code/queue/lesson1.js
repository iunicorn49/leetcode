/**
 * LeetCode 622 设计循环队列
 */

class CircularQueue {
	constructor(k) {
		this.list = new Array(k) // 数组长度, 私有属性
		this.front = 0 // 队首指针
		this.rear = 0 // 队尾指针
		this.max = k // 队列的长度
	}
	enQueue(num) { // 向循环队列插入一个元素, 如果成功返回true
		if (this.isFull()) {
			return false
		} else {
			this.list[this.rear] = num
			this._moveRear()
			return true
		}
	}
	deQueue() { // 从循环队列删除一个元素, 如果成功返回true
		if (!this.isEmpty()) {
			let v = this.list[this.front]
			this.list[this.front] = ''
			this._moveFront()
			return true
		}	else {
			return false
		}
	}
	isEmpty() { // 检查队列是否为空
		return this.front === this.rear && !this.list[this.front]
	}
	isFull() { // 检查队列是否已满
		return this.front === this.rear && !!this.list[this.front]
	}
	Front() { // 从队首获取元素, 如果队列为空, 返回 -1
		return this.isEmpty() ? -1 : this.list[this.front]
	}
	Rear() { // 从队尾获取元素, 如果队列为空, 返回 -1
		if (this.isEmpty()) {
			return false
		} else {
			let rear = this.rear - 1
			return this.list[rear < 0 ? this.max - 1 : rear]
		}
	}
	_moveRear() {
		this.rear = (this.rear + 1) % this.max
	}
	_moveFront() {
		this.front = (this.front + 1) % this.max
	}
}

export default CircularQueue