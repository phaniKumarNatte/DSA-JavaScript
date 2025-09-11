// 374. Guess Number Higher or Lower

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return       -1 if num is higher than the picked number
 *               1 if num is lower than the picked number
 *               0 if num is the correct number
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let res = guess(m);
        if (res === 0) {
            return m;          // Found the number
        } else if (res < 0) {
            r = m - 1;         // Guess is too high → search left
        } else {
            l = m + 1;         // Guess is too low → search right
        }
    }  
};


// Explanation

// Problem:
// We need to guess a number between 1 and n.
// We are given a helper API guess(num) that tells us:

// * -1 → our guess is too high

// * 1 → our guess is too low

// * 0 → guess is correct

// Approach: Binary Search

// *  Use two pointers: l = 1, r = n.
// * Compute mid safely: m = l + Math.floor((r - l) / 2).

// Call guess(m):

// * If result = 0 → return m.
// * If result = -1 → search left (r = m - 1).
// * If result = 1 → search right (l = m + 1).
// * Continue until the number is found.

// Dry Run : 
// Input: n = 10, picked = 6

// * l=1, r=10 → m=5 → guess(5) = 1 (too low) → l=6
// *  l=6, r=10 → m=8 → guess(8) = -1 (too high) → r=7
// * l=6, r=7 → m=6 → guess(6) = 0 → return 6

// Output: 6

// Complexity:
// * Time: O(log n) → binary search halves the range each step
// * Space: O(1) → only a few variables