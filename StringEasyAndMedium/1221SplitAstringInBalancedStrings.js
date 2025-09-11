// 1221. Split a String in Balanced Strings
// Given a string s consisting of 'L' and 'R', 
// a balanced string has equal number of 'L' and 'R'.
// Return the maximum number of balanced substrings you can split s into.

// Example:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: "RL", "RRLL", "RL", "RL"

// Approach:
// 1. Use a counter `temp` to track balance:
//    - Increment for 'R', decrement for 'L' (or vice versa)
// 2. Whenever `temp` reaches 0, a balanced substring is found → increment `count`
// 3. Continue through the string.
// 4. Return `count`.

// Complexity:
// Time Complexity: O(n) → traverse string once
// Space Complexity: O(1) → only a few variables used

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'R'){
            temp++;
        } else {
            temp--;
        }
        if(temp == 0){
            count++;
        }
    }
    return count;
};
