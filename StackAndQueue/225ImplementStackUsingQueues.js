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


// Interview preparation

======================================================================================================
// why variale this.q = [] why not var q = [] 
// var MyStack = function() {
//     this.q = [];
// }; 

var q = []
This creates a local variable inside the function.
Once the function finishes running, q disappears (unless you close over it with a closure).
It does not belong to the object you’re creating.

this.q = []
This attaches q as a property of the object instance.
Every time you do new MyStack(), that object gets its own q array.
Now you can access it anywhere with this.q.

Example : 
var MyStack = function() {
    this.q = [];  // property of the object
};

let s1 = new MyStack();
let s2 = new MyStack();

s1.q.push(10);
console.log(s1.q); // [10]
console.log(s2.q); // [] (different object, different q)

But if you used var q = [], then s1 and s2 wouldn’t have their own q. You couldn’t even access q from outside.

👉 Real world analogy:
var q = [] → You just made a temporary list called q. It exists only in that function or block. Once you’re done there, it’s gone.
this.q = [] → You made a list that is stored inside the object (this). As long as the object exists, the list stays with it.


======================================================================================================

What is an object instance?

An object is like a blueprint made real.

The blueprint is the class or constructor function (like MyStack).

An instance is one actual copy of that blueprint you create and use.

Real world analogy 🏠

Think of a blueprint of a house.

The blueprint describes: rooms, windows, doors, etc.

When you actually build a house from that blueprint, that’s an instance.

You can build many houses (instances) from the same blueprint. Each house is separate — paint one red, another blue.

var MyStack = function() {
    this.q = [];
};

// let s1 = new MyStack(); // one instance (house 1)
// let s2 = new MyStack(); // another instance (house 2)

// MyStack = blueprint (constructor).

// s1 and s2 = two instances (real houses).

// Each has its own this.q (like each house has its own furniture).

// An object instance just means one real copy of an object that you created from a template.

======================================================================================================
// Blueprint → Object → Instance

// Blueprint = the plan (like MyStack function/class).

// It says what the object should look like (what properties, what methods).

// But by itself, it’s just a plan, nothing real yet.

// Object = a thing in memory created from the blueprint.

// When you do new MyStack(), JavaScript creates an object.

// That object will have the properties and methods described in the blueprint.

// Instance = a specific object created from the blueprint.

// s1 is one instance of MyStack.

// s2 is another instance of MyStack.

// Both are objects, but they’re separate copies.

======================================================================================================

// what is this ?
// In JavaScript, this means the current object that the code is working with.