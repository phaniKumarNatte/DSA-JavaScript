// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Note : in-place with O(1) extra memory : This is about space complexity, not time.

// Example 1:

    // Input: s = ["h","e","l","l","o"]
    // Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let length = s.length;
    for(let i =0;i < Math.floor(length/2);i++){
        let temp = s[i];
        s[i] = s[length-1-i]
        s[length-1-i] = temp;
    }
};