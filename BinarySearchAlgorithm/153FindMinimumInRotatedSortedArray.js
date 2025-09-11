/**
 * Solved the "Find Minimum in Rotated Sorted Array" problem using Binary Search.
 *
 * Problem:
 * - You are given a sorted array that has been rotated at some pivot.
 * - The task is to find the minimum element in O(log n) time.
 *
 * Approach:
 * - Use binary search with two pointers `l` (left) and `r` (right).
 * - At each step, compute middle index `m`:
 *      - If `arr[m] < arr[r]`, it means the minimum lies on the left side (including `m`),
 *        so move `r = m`.
 *      - Otherwise, the minimum lies on the right side, so move `l = m + 1`.
 * - Loop ends when `l == r`, pointing to the minimum element.
 *
 * Intuition:
 * - Since the array is rotated, the "drop point" (where order breaks) is the minimum.
 * - Binary search gradually shrinks the range towards that point.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
    let l = 0;
    let r = arr.length-1;
    while(l<r){        
        let m = l+ Math.floor((r-l)/2);        
        if(arr[m]<arr[r]){
            r = m;
        } else{
            l=m+1;
        }
    }
    
    return arr[r];
}