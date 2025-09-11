// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// Implement the MinStack class:
// - MinStack() initializes the stack object.
// - void push(val) pushes the element val onto the stack.
// - void pop() removes the element on the top of the stack.
// - int top() gets the top element.
// - int getMin() retrieves the minimum element in the stack.
//
// Example:
// Input: 
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output: [null,null,null,null,-3,null,0,-2]
//
// Explanation:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
//
// Approach (Two stacks):
// - Maintain two stacks:
//   • `stack` → stores all elements
//   • `minVal` → stores current minimum at each state
// - On push: 
//   • Push val into `stack`.
//   • Push min(val, lastMin) into `minVal`.
// - On pop: 
//   • Pop from both `stack` and `minVal`.
// - top(): return last element of `stack`.
// - getMin(): return last element of `minVal`.
// This ensures O(1) time complexity for all operations.
//
// Time Complexity: O(1) per operation
// Space Complexity: O(n) for storing values + mins

var MinStack = function() {
  this.stack = [];
  this.minVal = [];    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.stack.length > 0) {
    let lastMin = this.minVal[this.minVal.length - 1];
    if (val < lastMin) {
      lastMin = val;
    }
    this.minVal.push(lastMin);
    this.stack.push(val);
  } else {
    this.stack.push(val);
    this.minVal.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {    
  this.minVal.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minVal[this.minVal.length - 1];
};
