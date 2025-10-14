<!-- 
// Why we need stack & queue ? 
// * Organise data logically (based on problem need).
// * Order of operation matter.
// * Optimize time/space for specific use cases.
// * use cases :
//  - Recursion - stack
//  - Level order traversal in trees - queue 3
//  - BFS - Queues
//  - DFS - stack

// * What is stack & Queue in code ?
// - stack is noting but a resticted array.


// When we already have arrays why do we need stack & queues?
// - Restricted Access (Top Only).Access
// - Cannot modify random index.
// - stack is equal to array with resticted Access. -->


<!-- Pop vs Peek in stack

Pop → looks at the top element of the stack AND removes it.
Example: stack = [1, 2, 3]
→ pop() gives 3 and now stack = [1, 2].

Peek (sometimes called top or stack[stack.length - 1] in JS) → looks at the top element but does NOT remove it.
Example: stack = [1, 2, 3]
→ peek() gives 3 and stack still = [1, 2, 3]. 

👉 Real world analogy:

Pop = taking the top book off a pile and removing it from the stack.

Peek = just looking at the title of the top book without moving it.
-->

# Stack and Queue Notes

- Use stack for next greater, next smaller, previous smaller, previous greater problems.

## Quick Interview Tips
- Know how to use stack for parentheses matching, evaluation, and monotonic stack problems.
- Practice queue-based problems like sliding window maximum and implementing stacks/queues with each other.
- Understand time complexity for push/pop/peek operations.

## Conceptual Insights
- Stack: LIFO (Last-In-First-Out), Queue: FIFO (First-In-First-Out).
- Monotonic stacks are powerful for range queries and span problems.
- Queues are essential for BFS and level-order traversal in trees/graphs.


