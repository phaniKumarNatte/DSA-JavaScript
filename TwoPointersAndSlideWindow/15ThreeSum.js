/**
 * Problem: 3Sum (LeetCode #15)
 * 
 * Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * Example:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * - Triplets that sum up to zero are [-1, -1, 2] and [-1, 0, 1].
 * - Order of triplets does not matter.
 * 
 * Approach:
 * 1. Sort the array to simplify duplicate handling and allow two-pointer technique.
 * 2. Fix one element (arr[i]) and then use two pointers (`first` and `last`) 
 *    to find the other two numbers that sum with arr[i] to zero.
 * 3. Skip duplicates for both the fixed element and the two pointers to avoid repeated triplets.
 * 4. Continue until all possibilities are checked.
 * 
 * Time Complexity: O(n^2) — Sorting O(n log n) + two-pointer search O(n^2).
 * Space Complexity: O(1) — Aside from the result storage, no extra space is used.
 */

/**
 * @param {number[]} nums - Input array of integers
 * @return {number[][]} - Array of unique triplets that sum to zero
 */
var threeSum = function(nums) {
    // Step 1: Sort the array
    let arr = nums.sort((a, b) => a - b);
    let res = [];

    // Step 2: Iterate through the array, fixing one element at a time
    for (let i = 0; i < arr.length; i++) {
        // Skip duplicate fixed numbers to avoid duplicate triplets
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        // Step 3: Call helper function to find pairs that, with arr[i], sum to 0
        twoSum(i);
    }

    /**
     * Helper function to find two numbers that sum with arr[i] to zero
     */
    function twoSum(i) {
        let first = i + 1;              // Left pointer
        let last = arr.length - 1;      // Right pointer

        while (first < last) {
            let sum = arr[i] + arr[first] + arr[last];

            if (sum === 0) {
                // Found a valid triplet
                res.push([arr[i], arr[first], arr[last]]);
                first++;
                last--;

                // Skip duplicates for left pointer
                while (arr[first] === arr[first - 1]) first++;

                // Skip duplicates for right pointer
                while (arr[last] === arr[last + 1]) last--;
            } else if (sum > 0) {
                // If sum too large, move right pointer left
                last--;
            } else {
                // If sum too small, move left pointer right
                first++;
            }
        }
    }

    return res;
};
