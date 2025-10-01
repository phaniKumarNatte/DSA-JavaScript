/**
 * Problem: Longest Repeating Character Replacement (LeetCode #424)
 * 
 * You are given a string s and an integer k. 
 * You can choose any character in the string and change it to any other character, 
 * at most k times.
 * 
 * Return the length of the longest substring containing the same letter 
 * you can get after performing the operations.
 * 
 * Example:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'B' in "AABA" to get "AAAA".
 * 
 * Approach: Sliding Window + Frequency Count
 * 1. Maintain a sliding window [i...j].
 * 2. Use a map to store the frequency of characters in the current window.
 * 3. At each step, calculate:
 *    - sum = total characters in the window
 *    - max = frequency of the most common character in the window
 * 4. If (sum - max) <= k → the window is valid (we can replace at most k characters).
 *    Update the maximum length.
 * 5. Otherwise, shrink the window from the left (i++).
 * 
 * Time Complexity: O(26 * n) ≈ O(n), since the inner loop iterates over at most 26 characters.
 * Space Complexity: O(26) ≈ O(1), for storing character counts.
 */

/**
 * @param {string} s - Input string
 * @param {number} k - Maximum allowed replacements
 * @return {number} - Length of the longest valid substring
 */
var characterReplacement = function(s, k) {
    let i = 0;                 // Left pointer (start of sliding window)
    let longChar = 0;          // Store maximum valid window length
    let map = {};              // Frequency map of characters in current window

    // Expand the window with right pointer (j)
    for (let j = 0; j < s.length; j++) {
        // Add current character to frequency map
        map[s[j]] = map[s[j]] ? map[s[j]] + 1 : 1;

        // Variables to calculate total count and max frequency
        let sum = 0, max = 0;

        // Calculate sum of counts and find max frequency in the current window
        for (let key in map) {
            sum += map[key];
            max = Math.max(max, map[key]);
        }

        // Check if window is valid (replacements needed <= k)
        if (sum - max <= k) {
            // Update longest valid substring length
            longChar = Math.max(longChar, j - i + 1);
        } else {
            // Shrink window from the left if invalid
            map[s[i]] -= 1;
            i++;
        }
    }

    return longChar;
};
