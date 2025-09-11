// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Input: s = "rat", t = "car"
// Output: false

// Approach:
// 1. If the lengths of s and t differ, they cannot be anagrams → return false.
// 2. Use a single hashmap (object) to count frequency of characters:
//    - Iterate over both strings simultaneously:
//      - Increment count for s[i]
//      - Decrement count for t[i]
// 3. After processing, if any value in the map is not zero, return false.
// 4. Otherwise, return true.

// Time Complexity: O(n) → n = length of strings
// Space Complexity: O(1) → limited to alphabet character count (constant space)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    let count = {};
    for(let i =0;i<s.length;i++){
    count[s[i]] = (count[s[i]] || 0) +1;
    count[t[i]] = (count[t[i]] || 0) -1;
    }
    for(let key in count){
        if(count[key] !=0){
            return false;
        }
    }
    return true;
    
    // let map = {};
    // for(let i=0;i<s.length;i++){
    //     if(!map[s[i]]){
    //         map[s[i]] = 1;
    //     } else {
    //         map[s[i]]++;
    //     }
    // }

    // for(let i =0;i<t.length;i++){
    //     if(!map[t[i]] || map[t[i]] < 0){
    //         return false;
    //     }
    //     if(map[t[i]]){
    //         map[t[i]]--;
    //     }
    // }
    // return true;
};