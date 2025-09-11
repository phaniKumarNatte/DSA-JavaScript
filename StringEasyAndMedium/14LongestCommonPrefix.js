// 14. Longest Common Prefix
// Given an array of strings, find the longest common prefix among all strings.
// If there is no common prefix, return an empty string.

// Example:
// Input: ["flower","flow","flight"]
// Output: "fl"
// Explanation: The first two characters 'f' and 'l' are common in all strings.

// Approach:
// 1. Use the first string as a reference.
// 2. Iterate character by character (index x) over the first string.
// 3. For each character, compare it with the character at the same index in all other strings.
// 4. If any string has a different character at this index or the string is shorter, return the prefix up to that index.
// 5. If all characters of the first string match, return the first string as the prefix.

// Time Complexity: O(n*m)
//   - n = number of strings
//   - m = length of the shortest string
// Space Complexity: O(1) (no extra space used)

var longestCommonPrefix = function(strs) {
   let x = 0;
   while(x < strs[0].length){
       let char = strs[0][x];    
       for(let i = 1; i < strs.length; i++){
           if(char != strs[i][x] || x == strs[i].length){
               return strs[0].substring(0, x); 
           }
       }
       x++;
   }
   return strs[0];
};
