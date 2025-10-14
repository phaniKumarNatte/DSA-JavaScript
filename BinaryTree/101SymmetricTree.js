/**
 * 🧠 LeetCode Problem: 101. Symmetric Tree
 *
 * Given the root of a binary tree, 
 * check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * Approach: Recursive Mirror Comparison
 * Time Complexity: O(N)
 * Space Complexity: O(H) — height of the tree (due to recursion stack)
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
 * ✅ Recursive Approach — Check mirror structure
 */
var isSymmetric = function(root) {
    
    // Helper function to check if two subtrees are mirror images
    const isMirror = (left, right) => {

        // Both null — symmetric
        if (!left && !right) return true;

        // Only one is null — not symmetric
        if (!left || !right) return false;

        // Check current nodes and recurse on mirror children
        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    };

    if (!root) return true; // Empty tree is symmetric
    return isMirror(root.left, root.right);
};

/**
 * ✅ Example:
 * Input: [1,2,2,3,4,4,3]
 * Output: true
 *
 * Input: [1,2,2,null,3,null,3]
 * Output: false
 */
