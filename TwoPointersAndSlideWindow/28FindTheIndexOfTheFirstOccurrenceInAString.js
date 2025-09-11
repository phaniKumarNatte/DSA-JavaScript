/**
 * Solved the "Find the Index of the First Occurrence in a String" (strStr) problem
 * using a brute-force substring matching approach.
 *
 * Problem:
 * - Given two strings `haystack` and `needle`, return the index of the first occurrence
 *   of `needle` in `haystack`. If `needle` is not found, return -1.
 *
 * Approach:
 * - Let `m = needle.length`, `n = haystack.length`.
 * - Iterate over all possible starting positions `i` in `haystack` (0 → n - m).
 * - For each `i`, try matching characters of `needle` with the substring of `haystack`:
 *      - If all characters match, return `i`.
 *      - If mismatch occurs, break and try next starting index.
 * - If no match is found after scanning, return -1.
 *
 * Intuition:
 * - This is a naive substring search:
 *   - Slide `needle` over `haystack` one index at a time.
 *   - Check if it fully matches at each step.
 *
 * Time Complexity: O(n * m)  
 *   - Worst case: for every starting index, we compare up to `m` characters.  
 * Space Complexity: O(1)  
 *   - No extra space is used.
 */


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m = needle.length;
    let n = haystack.length;    
    for(let i=0;i<=n-m;i++){
        let k=0;
        for(let j=i;j<n;j++){
            if(haystack[j] == needle[k]){             
                k++;             
                if(k==m){
                    return i;
                }
            }else {
                break;
            }            
        }
    }
    return -1;
};