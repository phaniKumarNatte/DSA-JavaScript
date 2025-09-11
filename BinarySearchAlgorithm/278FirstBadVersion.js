
/**
 * Solved the "First Bad Version" problem using Binary Search.
 *
 * Problem:
 * - You are given an API `isBadVersion(version)` which returns whether a version is bad.
 * - Versions are built sequentially: if a version is bad, all later versions are also bad.
 * - Goal: Find the first bad version in the range [1...n].
 *
 * Approach:
 * - Use binary search to minimize API calls.
 * - Maintain two pointers: `l` (left) and `r` (right).
 * - Check the middle version `m`:
 *      - If `isBadVersion(m)` is false, move search to the right half (`l = m + 1`).
 *      - If true, the first bad version could be `m` or earlier → move `r = m`.
 * - Continue until `l` meets `r`, which will point to the first bad version.
 *
 * Time Complexity: O(log n) — each step halves the search range.
 * Space Complexity: O(1) — only a few variables are used.
 */


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n == 1) return n;
        let l = 1;
        let r = n;             
        while(l<r){
            m = l + Math.floor((r-l)/2);                        
            if(!isBadVersion(m)){                
                l=m+1;
            } else { 
                r = m;                
            }        
        }        
        return r;
    };
};

