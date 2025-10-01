// s consists of English letters, digits, symbols and spaces.
// when we use map space compicy is O(m) or O(1) constant
// 

/**
 * Problem: Longest Substring Without Repeating Characters (LeetCode #3)
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Note: "pwke" is a subsequence, not a substring.
 * 
 * Approach: Sliding Window + Hash Map
 * - Use two pointers (i and j) to represent the sliding window.
 * - Maintain a hash map (map) to store the most recent index of each character.
 * - If a character is repeated within the current window, move the left pointer (i) 
 *   to the right of the previous occurrence of that character.
 * - Update the maximum window size each time.
 * 
 * Time Complexity: O(n) — Each character is processed at most twice.
 * Space Complexity: O(min(n, charset)) — At most, the hash map stores one entry per unique character.
 */

/**
 * @param {string} s - Input string
 * @return {number} - Length of longest substring without repeating characters
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;              // Left pointer for sliding window
    let map = {};           // Store last index of each character
    let max = 0;            // Store maximum substring length found

    // Expand window with right pointer (j)
    for (let j = 0; j < s.length; j++) {
        // If character already seen and within the current window
        if (map.hasOwnProperty(s[j]) && map[s[j]] >= i) {
            // Move left pointer just past the last occurrence
            i = map[s[j]] + 1;
        }

        // Update character's latest index
        map[s[j]] = j;

        // Update maximum length of substring
        max = Math.max(max, j - i + 1);
    }

    return max;
};
