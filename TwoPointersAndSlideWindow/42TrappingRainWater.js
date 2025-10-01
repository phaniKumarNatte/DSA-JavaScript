/**
 * Problem: Trapping Rain Water (LeetCode #42)
 * 
 * Given n non-negative integers representing an elevation map 
 * where the width of each bar is 1, compute how much water it can trap after raining.
 * 
 * Example:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The trapped water is shown between the bars.
 * 
 * Approach: Pre-computation with Max Left and Max Right arrays
 * 1. For each index, calculate:
 *    - maxL[i] = maximum height to the left of index i (including i).
 *    - maxR[i] = maximum height to the right of index i (including i).
 * 2. For each index i, trapped water = min(maxL[i], maxR[i]) - height[i].
 * 3. Sum this value for all indices to get the total trapped water.
 * 
 * Time Complexity: O(n) — One pass for maxL, one pass for maxR, one pass for result.
 * Space Complexity: O(n) — Two arrays for maxL and maxR.
 */

/**
 * @param {number[]} height - Array representing bar heights
 * @return {number} - Total trapped rainwater
 */
var trap = function(height) {
    let n = height.length;

    // Edge case: if less than 3 bars, no water can be trapped
    if (n < 3) return 0;

    // Arrays to store max height to the left and right of each index
    let maxL = [];
    let maxR = [];

    // Initialize first maxL and last maxR
    maxL[0] = height[0];
    maxR[n - 1] = height[n - 1];

    // Step 1: Fill maxL array (max height to the left of i)
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i]);
    }

    // Step 2: Fill maxR array (max height to the right of i)
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], height[i]);
    }

    // Step 3: Calculate trapped water
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.min(maxL[i], maxR[i]) - height[i];
    }

    return ans;
};
