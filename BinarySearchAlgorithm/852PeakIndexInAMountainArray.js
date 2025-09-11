/**
 * Solved the "Peak Index in a Mountain Array" problem using Binary Search.
 *
 * Problem:
 * - A mountain array is defined as an array where:
 *      arr[0] < arr[1] < ... < arr[i] > arr[i+1] > ... > arr[n-1].
 * - The task is to find the index `i` of the peak element.
 *
 * Approach:
 * - Use binary search with two pointers `l` (left) and `r` (right).
 * - At each step, calculate `m` (middle index) and compare:
 *      - If `arr[m] < arr[m+1]`, then the peak lies on the right side → move `l = m + 1`.
 *      - Otherwise, the peak lies on the left side (including `m`) → move `r = m`.
 * - Continue until `l == r`, which will be the peak index.
 *
 * Intuition:
 * - Imagine climbing the mountain: as long as the next element is higher,
 *   you keep moving right. When the slope turns downward, you know the peak is at `m`.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length-1;
    
    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m]<arr[m+1]){
            l = m+1;
        } else {
            r=m;
        }
    }
    return l;
};