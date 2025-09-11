
// 1903. Largest Odd Number in String
// Given a string representing a non-negative integer, return the largest odd number that is a prefix of the string.
// If no odd number exists, return an empty string.

// Example:
// Input: "35427"
// Output: "35427"
// Input: "4206"
// Output: ""

// Approach:
// - Start from the last digit and move backward
// - Check if the current digit is odd (digit % 2 == 1)
// - As soon as we find an odd digit, return the substring from start to this digit
// - If no odd digit found, return empty string
// - Time Complexity: O(n), n = length of string
// - Space Complexity: O(1)

var largestOddNumber = function(s) {
    let n = s.length - 1;

    while (n >= 0) {
        // Check if digit is odd
        if (Number(s[n]) % 2 === 1) {
            return s.substring(0, n + 1);
        }
        n--;
    }

    // No odd number found
    return "";
}
