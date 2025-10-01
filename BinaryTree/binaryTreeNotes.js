
// Tree:
// Non-linear structure.
// Hierarchical in nature.

// Node:
// Can have zero or more children.
// Has only one parent (except root).
// Cannot have cycles: Mean node have only one parent, otherwise it will form cycle (graphs).
// Exactly one path exists between any two nodes.
// No two parents can share the same child.
// Why Tree Data Structures?
// Not every type of data can be stored in an array or linked list.
// When we need to store hierarchical data, we use trees.

// Examples:
// File Systems
// HTML DOM
// Databases
// Hierarchical Data Models

// Types of Trees:

// General Tree: Any number of children.
// Binary Tree: At most two children per node.
// Binary Search Tree (BST): left < root < right.
// Complete Binary Tree: All levels filled except possibly the last.
// Full Binary Tree: Each node has 0 or 2 children.
// Perfect Binary Tree: Full and all leaves are at the same level.
// Balanced Binary Tree: Height is log(n).


// Tree Terminology:
// Node → A single element in the tree (like a box that holds data).
// Parent → A node that has one or more children.
// Child → A node that comes directly under another node (its parent).
// Sibling → Nodes that share the same parent.
// Height → The longest path from a node down to a leaf.
// Sub-tree → A smaller tree formed from any node and all its descendants.
// Leaf → A node with no children (end point of the tree).

// Tree Representation: Using Nodes & Pointers:

// Tree Visualisation
//         root.val = 1;
//         root.left = 2;
//         root.right = 3;



// Tree Traversal ?