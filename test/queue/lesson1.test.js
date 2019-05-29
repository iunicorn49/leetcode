import CircularQueue from '../../code/queue/lesson1'

test('设计循环队列', () => {
	const circularQueue = new CircularQueue(3)
	expect(circularQueue.enQueue(1)).toBe(true)
	expect(circularQueue.enQueue(2)).toBe(true)
	expect(circularQueue.enQueue(3)).toBe(true)
	expect(circularQueue.enQueue(4)).toBe(false)
	expect(circularQueue.Rear()).toBe(3)
	expect(circularQueue.isFull()).toBe(true)
	expect(circularQueue.deQueue()).toBe(true)
	expect(circularQueue.enQueue(4)).toBe(true)
	expect(circularQueue.Rear()).toBe(4)
})
