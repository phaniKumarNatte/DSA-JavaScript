// 771. Jewels and Stones
// You are given two strings: jewels and stones. 
// Each character in jewels represents a type of jewel. 
// Each character in stones represents a stone you have. 
// Return how many stones you have that are also jewels.

// Example:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Explanation: 'a' and 'A' are jewels. Stones 'a','A','A' match → count = 3

// Approach 1: Brute Force (nested loops)
// - Loop through each jewel
// - Loop through each stone
// - If jewel matches stone → increment count
// - Time Complexity: O(j * s) → j = jewels.length, s = stones.length
// - Space Complexity: O(1)

// Approach 2: Optimized (using HashSet)
// - Put all jewels in a Set for O(1) lookup
// - Loop through stones, if stone in Set → count++
// - Time Complexity: O(j + s)
// - Space Complexity: O(j)

// Edge Cases:
// - Empty jewels → return 0
// - Empty stones → return 0
// - Case sensitivity → 'a' != 'A'

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if(jewels[i] === stones[j]){
                count++;
            }
        }
    }
    return count;
};
