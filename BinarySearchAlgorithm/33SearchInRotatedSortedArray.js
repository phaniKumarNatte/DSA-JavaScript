
/**
 * Implemented a binary search to find the index of a target element in a sorted array.
 *
 * Approach:
 * - Use two pointers `l` (left) and `r` (right) to define the current search range.
 * - Repeatedly calculate the middle index `m`.
 * - If the middle element equals the target, return its index.
 * - Otherwise, shrink the search range based on the comparison:
 *      - If the target lies in the left half, move `r` to `m`.
 *      - Otherwise, move `l` to `m + 1`.
 * - Continue until the search range is narrowed down.
 * - After the loop, check if the remaining element is the target.
 * - If found, return its index; otherwise return -1.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, t) {
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let m = l+Math.floor((r-l)/2);
        if(arr[m] == t) return m;
        
        if(arr[l] >= t && t<arr[m+1]){
            r = m;
        } else {
            l = m+1;
        }  
                
    }  
    if(arr[l] == t){
        return l 
    } else {
        return -1;
    }
};