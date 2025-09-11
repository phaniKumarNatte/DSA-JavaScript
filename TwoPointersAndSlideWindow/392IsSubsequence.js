/**
 * Solved the "Is Subsequence" problem using the two-pointer technique.
 *
 * Problem:
 * - Given two strings `s` and `t`, determine if `s` is a subsequence of `t`.
 * - A subsequence means that all characters of `s` appear in `t` in the same order,
 *   but not necessarily consecutively.
 *
 * Approach:
 * - Use a pointer `pos` to track progress in string `s`.
 * - Traverse string `t`:
 *      - Whenever `t[i]` matches `s[pos]`, increment `pos`.
 *      - If `pos` reaches `s.length`, it means all characters of `s` were found in order.
 * - If traversal ends and `pos` < `s.length`, return false.
 *
 * Intuition:
 * - We “walk through” `t` and try to consume `s` along the way.
 * - If we can consume the whole `s`, it is a subsequence of `t`.
 *
 * Time Complexity: O(n)  (where n = length of `t`)
 * Space Complexity: O(1)
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) { 
    if(s.length <=0) return true; 
    let pos = 0;
    for(let i = 0;i<t.length;i++){
        
        if(s[pos] == t[i]){
            pos++;
        }
        if(pos == s.length){
            return true;
        }
    }
    return false;
};