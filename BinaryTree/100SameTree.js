/**
 * 🧠 LeetCode Problem: 100. Same Tree
 *
 * Given the roots of two binary trees p and q, 
 * check if they are **structurally identical** and the nodes have the same values.
 *
 * Approach: Recursive Comparison
 * Time Complexity: O(N) — N is the number of nodes
 * Space Complexity: O(H) — recursion stack, H = height of tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * ✅ Recursive Approach
 */
var isSameTree = function(p, q) {
    // Both nodes are null — identical
    if (!p && !q) return true;

    // One node is null, other is not — not identical
    if (!p || !q) return false;

    // Check current node and recurse on left and right subtrees
    return (
        p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    );
};

/**
 * ✅ Example:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 */
