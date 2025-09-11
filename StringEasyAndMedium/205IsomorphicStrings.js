// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t,
// with a one-to-one mapping between characters and no two characters mapping to the same character.

// Example:
// Input: s = "egg", t = "add"
// Output: true
// Input: s = "foo", t = "bar"
// Output: false

// Approach:
// 1. Use two hashmaps to maintain the mapping in both directions: s → t and t → s.
// 2. Iterate through the strings:
//    - If neither character is mapped yet, create the mapping in both maps.
//    - If mapping exists, ensure it is consistent with the current characters.
//    - If inconsistent → return false.
// 3. If loop finishes without conflicts → return true.

// Time Complexity: O(n) → iterate through the strings once
// Space Complexity: O(1) → maps store at most 26 characters each (constant space)

var isIsomorphic = function(s, t) {
    let mapSToT = {};
    let mapTToS = {};

    for (let i = 0; i < s.length; i++) {
        if (!mapSToT[s[i]] && !mapTToS[t[i]]) {
            mapSToT[s[i]] = t[i];
            mapTToS[t[i]] = s[i];
        } else if (mapTToS[t[i]] !== s[i] || mapSToT[s[i]] !== t[i]) {
            return false;
        }
    }

    return true;
};
