// 69. Sqrt(x)
// Given a non-negative integer x, compute and return the square root of x rounded down to the nearest integer.
// The returned integer should be the floor of sqrt(x).
//
// Example 1:
// Input: x = 8
// Output: 2
// Explanation: sqrt(8) = 2.828... → floor(2.828) = 2
//
// Example 2:
// Input: x = 4
// Output: 2
//
// Approach (Binary Search):
// - If x < 2, directly return x (since sqrt(0)=0, sqrt(1)=1).
// - Use binary search in the range [2, x/2] because sqrt(x) cannot exceed x/2 when x >= 2.
// - For mid = (l + r) / 2:
//     • If mid² == x → return mid.
//     • If mid² < x → move right (l = mid + 1).
//     • If mid² > x → move left (r = mid - 1).
// - When loop ends, `r` will hold the floor value of sqrt(x).
//
// Complexity:
// - Time: O(log n) → binary search halves the range each step.
// - Space: O(1).

var mySqrt = function(x) {
    if (x < 2) return x; // Handle 0 and 1 directly
    
    let l = 2;
    let r = Math.floor(x / 2);
    
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let sq = m * m;
        
        if (sq === x) return m;
        if (sq > x) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return r; // r is the floor of sqrt(x)
};
