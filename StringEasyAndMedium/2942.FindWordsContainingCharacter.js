// 2942. Find Words Containing Character
// Given an array of strings `words` and a character `x`, 
// return an array of indices of words that contain the character `x`.

// Example:
// Input: words = ["apple","banana","grape"], x = "a"
// Output: [0,1,2] → all words contain "a"

// Approach:

// 1. Using built-in `includes` method (simpler):
//    - Loop through words array
//    - If words[i].includes(x) → push i to result

// 2. Using nested loop (manual check, O(n*m)):
//    - Outer loop: iterate over each word
//    - Inner loop: iterate over each character of the word
//    - If character matches x → push index, break inner loop

// Edge Cases:
// - Empty words array → return []
// - Character not found in any word → return []
// - Case sensitivity → 'a' != 'A'

// Complexity:
// Time Complexity: O(n*m) → n = words.length, m = max word length
// Space Complexity: O(k) → number of matching words

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res = [];

    // Approach 1: built-in
    // for(let i = 0; i < words.length; i++){
    //     if(words[i].includes(x)){
    //         res.push(i);
    //     }
    // }

    // Approach 2: nested loop
    for(let i = 0;i<words.length;i++){
        for(let j = 0;j<words[i].length;j++){
            if(words[i][j] === x ){
                res.push(i);
                break;
            }
        }
    }  
    return res; 
};
