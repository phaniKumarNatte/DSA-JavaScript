
/**
 * Solved the "Find Peak Element" problem using Binary Search.
 *
 * Problem:
 * - A peak element is one that is strictly greater than its neighbors.
 * - The array may have multiple peaks, but we need to return the index of any one peak.
 *
 * Approach:
 * - Use binary search to avoid scanning the entire array.
 * - At each step, compare middle element `arr[m]` with its right neighbor `arr[m+1]`:
 *      - If `arr[m] < arr[m+1]`, then the peak must be on the right side → move `l = m + 1`.
 *      - Otherwise, the peak is on the left side (including `m`) → move `r = m`.
 * - Loop continues until `l == r`, which will be the index of a peak.
 *
 * Intuition:
 * - The array always leads you "uphill" to a peak.
 * - By following the greater neighbor, binary search narrows down to one peak.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(arr) {
    let l = 0;
    let r = arr.length-1;
    
    while(l<r){        
        let m = l + Math.floor((r-l)/2);
        if(arr[m]<arr[m+1]){
            l = m+1;
        } else {
            r = m;
        }        
    }
    return l;
};