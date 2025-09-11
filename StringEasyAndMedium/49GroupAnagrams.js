// 49. Group Anagrams
// Given an array of strings, group the anagrams together.
// An Anagram is a word formed by rearranging the letters of another word.
// Return the groups of anagrams in any order.

// Example:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// Approach:
// 1. Use a hashmap to store sorted string as key and list of words as value.
// 2. Iterate over each word:
//    - Sort the characters of the word to form the key.
//    - If key exists in map → push word to array.
//    - If key doesn’t exist → create a new array with the word.
// 3. Return all values of the map as the grouped anagrams.

// Time Complexity: O(n * k log k) → n = number of strings, k = max length of string (for sorting)
// Space Complexity: O(n * k) → storing all words in the map

var groupAnagrams = function(strs) {
    let map = {};
    for(let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map[sortedStr]){
            map[sortedStr] = [strs[i]];
        } else {
            map[sortedStr].push(strs[i]);
        }        
    }
    return [...Object.values(map)];
};
