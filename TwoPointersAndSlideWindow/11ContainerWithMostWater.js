/**
 * Problem: Container With Most Water (LeetCode #11)
 * 
 * You are given an integer array `height` where each element represents
 * the height of a vertical line drawn on the x-axis.
 * 
 * The task is to find two lines that, together with the x-axis, form a container 
 * that can hold the maximum amount of water.
 * 
 * Example:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The lines at index 1 (height=8) and index 8 (height=7) form the container
 *              with max area = min(8,7) * (8-1) = 7 * 7 = 49
 * 
 * Approach: Two Pointer Technique
 * - Start with two pointers: one at the beginning (left) and one at the end (right).
 * - Calculate the area between them.
 * - Move the pointer that points to the shorter line, because that’s the limiting factor
 *   in the area calculation.
 * - Keep track of the maximum area found.
 * - Continue until the two pointers meet.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} height - Array of line heights
 * @return {number} - Maximum water container area
 */
var maxArea = function(height) {
    let left = 0;                       // Left pointer
    let right = height.length - 1;      // Right pointer
    let maxArea = 0;                    // Store maximum area found
    
    while (left < right) {
        // Calculate the width between two lines
        let width = right - left;
        
        // The area is determined by the shorter line
        let area = Math.min(height[left], height[right]) * width;
        
        // Update max area if current area is larger
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};
