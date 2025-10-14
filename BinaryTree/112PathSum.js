/**
 * 🧠 LeetCode Problem: 112. Path Sum
 * 
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that 
 * adding up all the values along the path equals targetSum.
 * 
 * Approaches:
 * 1️⃣ Top-Down (DFS)
 * 2️⃣ Bottom-Up (Recursive)
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
 * ✅ Approach 1: Top-Down (DFS)
 * Time Complexity: O(N)
 * Space Complexity: O(H) — height of the tree
 */
var hasPathSumTopDown = function(root, targetSum) {
    if (!root) return false;

    let ans = false;

    const dfs = (curr, currSum) => {
        if (!curr) return;

        let newSum = currSum + curr.val;

        // Check if it's a leaf node
        if (!curr.left && !curr.right) {
            if (newSum === targetSum) ans = true;
        }

        // Recursive DFS
        dfs(curr.left, newSum);
        dfs(curr.right, newSum);
    };

    dfs(root, 0);
    return ans;
};


/**
 * ✅ Approach 2: Bottom-Up (Recursive)
 * Time Complexity: O(N)
 * Space Complexity: O(H)
 */
var hasPathSumBottomUp = function(root, targetSum) {
    if (!root) return false;

    // Base case — leaf node
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    // Recur for left and right subtrees
    let left = hasPathSumBottomUp(root.left, targetSum - root.val);
    let right = hasPathSumBottomUp(root.right, targetSum - root.val);

    return left || right;
};


/** 
 * ✅ You can test both like this:
 * console.log(hasPathSumTopDown(root, 22));
 * console.log(hasPathSumBottomUp(root, 22));
 */
