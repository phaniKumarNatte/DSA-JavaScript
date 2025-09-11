/**
 * Solved the "Single Element in a Sorted Array" problem using Binary Search.
 *
 * Problem:
 * - Given a sorted array where every element appears exactly twice except for one element that appears once.
 * - Find the single element in O(log n) time.
 *
 * Approach:
 * - Use binary search with two pointers `l` (left) and `r` (right).
 * - At each step, calculate middle index `m`.
 * - Check the following:
 *      1. If `m` is odd and `arr[m] == arr[m-1]` → the single element is on the right.
 *      2. If `m` is even and `arr[m] == arr[m+1]` → the single element is on the right.
 *      3. Otherwise, the single element is on the left (including `m`).
 * - Adjust `l` and `r` accordingly.
 * - Loop continues until `l == r`, which will be the single element.
 *
 * Intuition:
 * - In a perfect pair array, the first element of every pair should be at an even index,
 *   and the second at an odd index.
 * - When the pattern breaks, it indicates the single element is before or at that position.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length-1;
    
    while(l<r){
        let m = l+Math.floor((r-l)/2);
        let con1 = (m%2 == 1 && arr[m] == arr[m-1]);
        let con2 = (m%2 == 0 && arr[m] == arr[m+1])
        if( con1 || con2 ) {
            l = m+1;
        } else {
            r = m;
        }
    }    
    return arr[l];
    
};