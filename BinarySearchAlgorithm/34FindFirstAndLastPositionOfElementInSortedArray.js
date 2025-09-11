
/**
 * Solved the "Find First and Last Position of Element in Sorted Array" problem using Binary Search.
 *
 * Problem:
 * - Given a sorted array `arr` and a target `t`, return the first and last index of the target.
 * - If the target is not found, return [-1, -1].
 *
 * Approach:
 * - Perform two separate binary searches:
 *    1. First binary search (lower bound):
 *        - Find the leftmost index where target appears.
 *        - Keep moving `r = m` when `t <= arr[m]` to push search range left.
 *    2. Second binary search (upper bound):
 *        - Find the rightmost index where target appears.
 *        - Keep moving `l = m` when `t >= arr[m]` to push search range right.
 * - At the end, check if target exists at those indices.
 * - If yes, return [first, last]; otherwise return [-1, -1].
 *
 * Intuition:
 * - First search “pushes” towards the left boundary of the target.
 * - Second search “pushes” towards the right boundary of the target.
 * - This ensures both positions are found in O(log n).
 *
 * Time Complexity: O(log n)  (two binary searches)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, t) {
    let l = 0;
    let r = arr.length-1;
    let ans = [-1,-1];
    while(l<r){
        let m = l + Math.floor((r-l)/2);        
        if(t<=arr[m]){
            r=m;
        } else {
            l = m+1;
        }        
    }
    
    if(t == arr[l]){
        ans[0]=l;
    }
    // l = 0;
    r = arr.length-1;
    while(l<r){
        let m = l+Math.round((r-l)/2);
        if(t>=arr[m]){
            l = m;
        } else {
            r = m-1;
        }
    }
    if(t == arr[l]){
        ans[1]=l;
    }
    return ans;
};




// All of them are valid binary search approaches, just implemented with slightly different conditions. Let me summarize them with clarity so you can document/commit them properly.

// 🔑 Intuition (your idea, cleaned up)

// First, find the left boundary (first occurrence):

// Keep shrinking towards the left whenever you see the target or a larger value.

// This ensures we stop at the very first index of the target.

// Then, find the right boundary (last occurrence):

// Keep shrinking towards the right whenever you see the target or a smaller value.

// This ensures we stop at the very last index of the target.


// Trick:

// For first occurrence, use Math.floor when moving mid (r = m) so we don’t skip the leftmost target.

// For last occurrence, use Math.ceil (or careful conditions with l = m) so we don’t skip the rightmost target.

// That’s why your intuition about floor vs round/ceil is correct 

/**
 * Solved the "Find First and Last Position of Element in Sorted Array" problem 
 * using two binary searches.
 *
 * Approach:
 * 1. First binary search → Find the leftmost occurrence:
 *      - Move `r = m` whenever arr[m] >= target.
 *      - This guarantees we stop at the first index of the target.
 * 2. Second binary search → Find the rightmost occurrence:
 *      - Move `l = m` whenever arr[m] <= target.
 *      - Using `Math.ceil` keeps the pointer from getting stuck.
 *      - This guarantees we stop at the last index of the target.
 * 3. Validate results and return [first, last], or [-1, -1] if not found.
 *
 * Time Complexity: O(log n)  (two binary searches)
 * Space Complexity: O(1)
 */


var searchRange = function(arr, t) {
    let l = 0;
    let r = arr.length-1;
    let ans = [-1,-1];
    while(l<r){
        let m = l + Math.floor((r-l)/2);        
        if(t<=arr[m]){
            r=m;
        } else {
            l = m+1;
        }        
    }
    
    if(t == arr[l]){
        ans[0]=l;
    }
    l = 0;
    r = arr.length-1;
    while(l<r){
        let m = l+Math.round((r-l)/2);
        if(t>=arr[m]){
            l = m;
        } else {
            r = m-1;
        }
    }
    if(t == arr[l]){
        ans[1]=l;
    }
    return ans;
};
let output  = searchRange([5,7,7,8,8,10],8);
console.log('output---',output);


// my intituion is first find the left side target values, the left side target values should be grater then the left value, same logic for right as well, the trick is for let we have to  do floor to move right we have do round./




var searchRange = function(arr, t) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];

    // First occurrence
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] >= t) {
            r = m - 1;
        } else {
            l = m + 1;
        }
        if (arr[m] === t) ans[0] = m;
    }

    l = 0;
    r = arr.length - 1;

    // Last occurrence
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] <= t) {
            l = m + 1;
        } else {
            r = m - 1;
        }
        if (arr[m] === t) ans[1] = m;
    }

    return ans;
};




// approch 3
var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[0] = m;
            r = m - 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = arr.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[1] = m;
            l = m + 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return ans;
};




var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < target) l = m + 1;
        else r = m;
    }

    if (arr[l] === target) ans[0] = l;

    l = 0;
    r = arr.length - 1;

    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (arr[m] > target) r = m - 1;
        else l = m;
    }

    if (arr[l] === target) ans[1] = l;

    return ans;
};


// ✅ Best Practice Implementation

// Here’s the cleanest and most readable binary search version:

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {
    let ans = [-1, -1];

    // First occurrence
    let l = 0, r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < target) l = m + 1;
        else r = m;
    }
    if (arr[l] === target) ans[0] = l;

    // Last occurrence
    l = 0, r = arr.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (arr[m] > target) r = m - 1;
        else l = m;
    }
    if (arr[l] === target) ans[1] = l;

    return ans;
};
