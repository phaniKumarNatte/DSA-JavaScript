// 3541. Find Most Frequent Vowel and Consonant
// Given a string `s`, find the maximum frequency of any vowel and the maximum frequency of any consonant,
// then return their sum.

// Example:
// Input: s = "abacadae"
// Frequencies: a=4 (vowel), b=1, c=1, d=1, e=1
// Max vowel = 4, Max consonant = 1 → Output: 5

// Approach:
// 1. Use a map/object to count the frequency of each character in the string.
// 2. Separate vowels and consonants using a vowel set/list.
// 3. Track max frequency of vowels and consonants.
// 4. Return the sum of maxVowels + maxConsonants.

// Edge Cases:
// - Empty string → return 0
// - Only vowels or only consonants → sum will include 0 for missing type

// Complexity:
// Time: O(n) → traverse string + keys (<=26 letters)
// Space: O(1) → map stores at most 26 letters

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};
    for(let i=0;i<s.length;i++){
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
        // if(map[s[i]]){
        //     map[s[i]]++;                 
        // } else {
        //     map[s[i]] = 1
        // }        
    }
    let vowels = ['a','e','i','o','u'];
    let maxVowels = 0;
    let maxConsonets = 0;
    let mapKeys = Object.keys(map);
    for(let i=0;i<mapKeys.length;i++){
        if(vowels.includes(mapKeys[i]))  {
            maxVowels = Math.max(maxVowels,map[mapKeys[i]]);
        //   if(map[mapKeys[i]] > maxVowels){
        //     maxVowels = map[mapKeys[i]];
        //   }
        }  else {
            maxConsonets = Math.max(maxConsonets,map[mapKeys[i]]);
        //   if(map[mapKeys[i]] > maxConsonets){
        //     maxConsonets = map[mapKeys[i]];
        //   }
        }
    }
    return maxVowels + maxConsonets;
};