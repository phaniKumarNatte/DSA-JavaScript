// 232. Implement Queue using Stacks
// Implement a first-in-first-out (FIFO) queue using only two stacks.
// The implemented queue should support push, pop, peek, and empty operations.

// Example:
// Input:
// ["MyQueue","push","push","peek","pop","empty"]
// [[],[1],[2],[],[],[]]
// Output:
// [null,null,null,1,1,false]

// Explanation:
// - Push 1, then push 2 → queue = [1,2]
// - peek() → returns 1
// - pop() → removes 1, returns 1
// - empty() → returns false (since 2 is still in the queue)

// Approach (Using Two Stacks):
// - Use s1 for enqueue (push).
// - Use s2 for dequeue and peek.
// - When popping or peeking, if s2 is empty, move all elements from s1 → s2.
//   This reverses order, so the oldest element ends up on top of s2.
// - Empty check: return true if both s1 and s2 are empty.

// Time Complexity:
// - push: O(1)
// - pop: Amortized O(1) → costly only when moving elements
// - peek: Amortized O(1)
// - empty: O(1)
// Space Complexity: O(n) for storing elements

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
