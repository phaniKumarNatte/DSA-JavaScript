// 225. Implement Stack using Queues
// Implement a last-in-first-out (LIFO) stack using only one queue.
// The implemented stack should support push, pop, top, and empty operations.

// Example:
// Input:
// ["MyStack","push","push","top","pop","empty"]
// [[],[1],[2],[],[],[]]
// Output:
// [null,null,null,2,2,false]

// Explanation:
// - Push 1, then push 2 → stack = [1,2]
// - top() → returns 2
// - pop() → removes 2, returns 2
// - empty() → returns false (since 1 is still in the stack)

// Approach (Using One Queue):
// - push(x): Simply enqueue element at the end.
// - pop(): Rotate queue (size-1 times) to move last element to front, then dequeue it.
// - top(): Rotate queue (size-1 times), peek last element, enqueue it back, return it.
// - empty(): Return true if queue is empty, false otherwise.

// Time Complexity:
// - push: O(1)
// - pop: O(n)
// - top: O(n)
// - empty: O(1)
// Space Complexity: O(n) for storing elements

var MyStack = function() {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let length = this.q.length - 1;
    for (let i = 0; i < length; i++) {
        this.q.push(this.q.shift());
    }
    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let length = this.q.length - 1;
    for (let i = 0; i < length; i++) {
        this.q.push(this.q.shift());
    }
    let lastEle = this.q.shift();
    this.q.push(lastEle);
    return lastEle;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
