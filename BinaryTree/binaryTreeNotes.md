<!-- 
Tree:
Non-linear structure.
Hierarchical in nature.

Node:
Can have zero or more children.
Has only one parent (except root).
Cannot have cycles: Mean node have only one parent, otherwise it will form cycle (graphs).
Exactly one path exists between any two nodes.
No two parents can share the same child.
Why Tree Data Structures?
Not every type of data can be stored in an array or linked list.
When we need to store hierarchical data, we use trees.

Examples:
File Systems
HTML DOM
Databases
Hierarchical Data Models

Types of Trees:

General Tree: Any number of children.
Binary Tree: At most two children per node.
Binary Search Tree (BST): left < root < right.
Complete Binary Tree: All levels filled except possibly the last.
Full Binary Tree: Each node has 0 or 2 children.
Perfect Binary Tree: Full and all leaves are at the same level.
Balanced Binary Tree: Height is log(n).


Tree Terminology:
Node → A single element in the tree (like a box that holds data).
Parent → A node that has one or more children.
Child → A node that comes directly under another node (its parent).
Sibling → Nodes that share the same parent.
Height → The longest path from a node down to a leaf.
Sub-tree → A smaller tree formed from any node and all its descendants.
Leaf → A node with no children (end point of the tree).

Tree Representation: Using Nodes & Pointers:

Tree Visualisation
        root.val = 1;
        root.left = 2;
        root.right = 3;


What is Tree Traversal? 
Tree traversal is the process of visiting each node in a tree.

Traversal Technique:
Pre-Order Traversal : Root → Left → Right
In-Order Traversal  : Left → Root → Right
Post-Order Traversal:  Left → Right → Root
Order: Traverse Level by Level (Top to Bottom)


Trees : 

The Tree data structure is similar to Linked Lists in that each node contains data and can be linked to other nodes.

We have previously covered data structures like Arrays, Linked Lists, Stacks, and Queues. These are all linear structures, which means that each element follows directly after another in a sequence. Trees however, are different. In a Tree, a single element can have multiple 'next' elements, allowing the data structure to branch out in various directions.

Benefits of Binary Trees over Arrays and Linked Lists:

Arrays : 
        - Good at: Finding an element quickly if you know its position (like “give me the 700th element”).
        - Bad at: Adding or removing elements, because all other elements may need to be shifted around.

Linked Lists
        - Good at: Adding or removing elements anywhere, because you just change a few connections (no shifting).
        - Bad at: Finding a specific element, because you have to start from the beginning and move one by one.

Binary Trees
        - Good at both:
        - Finding elements (faster than linked lists, though not always as direct as arrays).
        - Adding or removing elements (faster than arrays, no shifting needed).

🌳 What root really means
In a binary tree:
   1
  / \
 2   3

Each circle (1, 2, 3) is a node.

The root is the topmost node — the entry point of the whole tree.
So:
root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
}
⚙️ So what is root?

root is one node object, not an array.
But that node contains references to its left and right child nodes.
That’s why we can traverse the whole tree just starting from root.

========================================================================================================================
🧠 Why let stack = [root] (not stack = root)

root → is one node object (like { val: 1, left: ..., right: ... })

To use .push() and .pop(), we need a real array — a stack structure.

By writing [root], you create an array containing that first node, so you can treat it like: stack = [node1, node2, node3, ...]
Example : 
let stack = [root];  // ✅ valid stack

while(stack.length) {
  let curr = stack.pop();  // works
}

if you did : 
let stack = root;  // ❌ root is not an array
stack.pop();       // TypeError: stack.pop is not a function

===============================================================
DFS and BFS in Binary Tree:
DFS: Depth First Search
        - DFS explores a tree by going as deep as possible along a branch before backtracking.
BFS: Breadth First Search
        - Explore the tree level by level, explore all nodes at the current level before moving deeper.

===============================================================

🌀 Imagine this real-world situation:
You are inside a maze garden — like the ones in amusement parks.
There are paths and walls.
Your goal is simple:

“Find the exit door 🚪 from the maze.”

You can move in 4 directions — up, down, left, right — but not through walls.

🔹 1. DFS — Depth First Search 🧭
🎯 Idea:

Try one path completely until you reach a dead end.
If it’s blocked, go back (backtrack) and try another way.

🧩 Real-world Example:

You’re walking inside the maze with a marker chalk and a good memory.

You start from the entrance.

You pick one direction — say left — and keep walking forward until you hit a wall.

When you can’t move forward anymore, you go back (backtrack) to the last junction.

Then you try the next unvisited path from there.

You keep repeating this — go deep, backtrack, try again —
until finally you find the exit door.

🧠 DFS in simple words:

You explore deeply before widely.
You care about finishing one route first, then others.

⚙️ Tools (in computer terms):

DFS uses a stack or recursion,
which acts like your memory of the path you took —
so you can backtrack correctly when you hit a wall.

🌳 In short:

You’re like a person who keeps saying: “Let’s go this way first and see how far I can go.”

You explore depth first.

==========================================================================================
🔹 2. BFS — Breadth First Search 🚶‍♂️🚶‍♀️
🎯 Idea:

Explore all nearby paths first, before going deeper.

🧩 Real-world Example:

Now imagine you are inside the same maze,
but this time you have a drone flying above you 🛰️
that can see all possible paths near you.

You start at the entrance.

You first explore all directions you can reach in 1 step.
(All paths right next to you.)

Then, from those new spots, you explore all paths that are 2 steps away.

Then all spots 3 steps away, and so on…

The first time the drone finds the exit,
it’s guaranteed to be the shortest path.

🧠 BFS in simple words:

You explore all paths equally, step by step, like a wave spreading out.

⚙️ Tools (in computer terms):

BFS uses a queue,
which ensures you always explore the oldest (nearest) position before newer ones —
just like exploring all directions one level at a time.


🧩 Simple Summary:

DFS → Like a person exploring the maze deeply → “Let me try this way first!” -> "When you just need a path"

BFS → Like a drone scanning all possible directions level by level → “Check everything near first, then go further.” -> "When you need shortest path"

=================================================================
Array.shift() in JavaScript is O(n) —
because it removes the first element of the array,
and then shifts all remaining elements one place forward.

So inside your while loop, doing .shift() repeatedly can make the total complexity O(n²) for large trees.

=================================================================
Here’s a complete cheat sheet for all commonly used operations:
🧠 JavaScript Array Operations — Time & Space Complexities
| Operation                          | Description                    | Time Complexity | Space Complexity | Notes                           |
|------------------------------------|--------------------------------|-----------------|------------------|----------------------------------|
| arr.push(x)                        | Add element to end             | O(1)            | O(1)             | Constant-time append             |
| arr.pop()                          | Remove element from end        | O(1)            | O(1)             | Constant-time removal            |
| arr.unshift(x)                     | Add element to start           | O(n)            | O(1)             | Shifts all elements right        |
| arr.shift()                        | Remove element from start      | O(n)            | O(1)             | Shifts all elements left         |
| arr[i]                             | Access element by index        | O(1)            | O(1)             | Direct access                    |
| arr[arr.length - 1]                | Access last element (peek)     | O(1)            | O(1)             | Used for top in stack            |
| arr.includes(x)                    | Check if element exists        | O(n)            | O(1)             | Scans entire array               |
| arr.indexOf(x)                     | Find index of element          | O(n)            | O(1)             | Linear search                    |
| arr.slice()                        | Copy part/all of array         | O(k)            | O(k)             | k = elements copied              |
| arr.splice()                       | Insert/remove elements         | O(n)            | O(n)             | Depends on number of moves       |
| arr.concat()                       | Merge two arrays               | O(n + m)        | O(n + m)         | Creates new array                |
| arr.reverse()                      | Reverse array in place         | O(n)            | O(1)             | Modifies same array              |
| arr.sort()                         | Sort array                     | O(n log n)      | O(log n)         | Uses Timsort (hybrid sort)       |
| arr.map() / arr.filter() / reduce()| Create new array via function  | O(n)            | O(n)             | Iterates through all elements    |
| [...arr]                           | Shallow copy (spread operator) | O(n)            | O(n)             | Same as slice() performance      |

========================================================================
| Type               | What happens first                            | Example       | Result             |
| ------------------ | --------------------------------------------- | ------------- | ------------------ |
| **Post-increment** | Uses current value first, *then* increases it | `x = index++` | `x` gets old value |
| **Pre-increment**  | Increases value first, *then* uses it         | `x = ++index` | `x` gets new value |

🔹 Example
let index = 0;

console.log(index++); // prints 0 → then index becomes 1
console.log(index);   // now index = 1

console.log(++index); // increases first → prints 2
console.log(index);   // now index = 2

🧩 Post-increment (index++) vs Pre-increment (++index)
--> 




ans[level] = [];
ans[level].push(); 