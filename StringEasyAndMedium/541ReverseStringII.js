// 541. Reverse String II
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start.
// If there are less than k characters left, reverse all of them.  
// If there are between k and 2k characters, reverse the first k characters and leave the others as is.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Explanation: 
// - Reverse first 2: "ab" → "ba"
// - Leave next 2: "cd"
// - Reverse next 2: "ef" → "fe"
// - Last char "g" remains

// Approach 1: Using split() and manual swaps (preferred)
// - Convert string to array
// - Iterate over every 2k characters (x = 0, 2k, 4k, …)
// - Reverse first k characters using a helper loop
// - Join array back into string

// Approach 2: Using nested loops (older commented attempts)
// - Similar logic but tried different indices and mid calculation
// - Multiple commented variants show evolution of your thought process


// Approach 3: Handling the last block < k characters
// Idea: Loop through the string in 2k blocks.
// Check remaining characters: If fewer than k characters are left, only reverse those.
// Implementation: Use Math.min(k, remaining length) to calculate how many characters to reverse.
// Benefit: Works for all edge cases (string length not multiple of 2k).
// First approach: Old attempt, index logic wrong. ❌

// Second approach: Active, mostly works but doesn't handle last block < k. ✅/⚠

// Third approach: Commented, similar to second, just different variable usage. ✅

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    //  s = s.split("");
// let length = Math.floor(s.length);
// let mid = Math.floor(k/2);


// for(let i = 0;i<length;i = i+(k*2)){
  
//   for(let j = 0;j<mid;j++){
//     let temp = s[i];
//     s[i] = s[i+1];
//     s[i+1] = temp;
//   }
  
// }

    s = s.split("");
    for(let x =0;x<s.length;x = x+(2*k)){        
        let mid = Math.floor(k/2);
        for(let i = 0;i<mid;i++){
            let temp = s[x+i];
            s[x+i] = s[x+k-1-i];
            s[x+k-1-i] = temp;
        }
    }

    // s = s.split("");
    // for(let x =0;x<s.length;x = x+(2*k)){
    //     let n = k;
    //     let mid = Math.floor(n/2);
    //     for(let i = 0;i<mid;i++){
    //         let temp = s[x+i];
    //         s[x+i] = s[x+n-1-i];
    //         s[x+n-1-i] = temp;
    //     }
    // }
    return s.join("");
};


// Approach 3: Final robust approach
// - Loop through the string in 2k blocks
// - Reverse first min(k, remaining chars) in each block
// - Handles all edge cases including last block < k

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");
    for (let x = 0; x < s.length; x += 2*k) {
        let n = Math.min(k, s.length - x);
        let mid = Math.floor(n / 2);
        for (let i = 0; i < mid; i++) {
            let temp = s[x + i];
            s[x + i] = s[x + n - 1 - i];
            s[x + n - 1 - i] = temp;
        }
    }
    return s.join("");
};