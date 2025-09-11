// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is defined as a maximal substring consisting of non-space characters only.

// Approaches:

// 1. Using built-in methods (simple):
//    - Trim the string to remove leading/trailing spaces
//    - Split by " " to get all words
//    - Return the length of the last element

// 2. Single-loop (optimized, O(n) without extra space):
//    - Start from the end of the string
//    - Skip trailing spaces
//    - Count characters until a space or start of string is reached

// 3. Two-loops (clear step-by-step):
//    - First loop: skip trailing spaces
//    - Second loop: count characters of the last word

// Example:
// Input: "   Hello World  "
// Process:
//   Trim/split → ["Hello", "World"] → last = "World"
// Output: 5

// Edge Cases:
// - String with only spaces → return 0
// - Single word → return its length
// - Multiple spaces between words → last word still counted correctly

// Complexity:
// Time Complexity: O(n) → traverse string once
// Space Complexity:
//   - Split method: O(n) for array
//   - Single-loop: O(1) constant space


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // with predefined 
        
    let strArr = s.trim().split(" ");    

    count = strArr[strArr.length-1].length;

    // with single loop
    // let strLen = s.length-1;
    // let count = 0;
    // while(strLen >=0){
    //     if(s[strLen] != " "){
    //         count++;
    //     } else if(count>0){
    //         break;
    //     }
    //     strLen--;
    // }
    // with two loops       
    // while(strLen>=0){
    //     if(s[strLen] !=" ") break;
    //     strLen--;
    // }  

    // let count = 0;
    // while(strLen>=0){        
    //     if(s[strLen] == " ") break;  
    //     strLen--;      
    //     count++; 
    // }
    return count;
};