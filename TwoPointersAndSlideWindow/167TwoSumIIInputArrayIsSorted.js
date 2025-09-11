/**
 * Solved the "Two Sum II – Input Array Is Sorted" problem using Two Pointers.
 *
 * Problem:
 * - Given a sorted array `arr` and a target sum, return the 1-based indices
 *   of the two numbers such that they add up to the target.
 * - It is guaranteed that exactly one solution exists.
 *
 * Approach:
 * - Use two pointers: `left` starting at the beginning, `right` at the end.
 * - Calculate the sum of elements at these positions:
 *      - If the sum equals the target → return [left+1, right+1].
 *      - If the sum is less than target → move `left` forward to increase sum.
 *      - If the sum is greater than target → move `right` backward to decrease sum.
 * - Loop continues until the pair is found.
 *
 * Intuition:
 * - Since the array is sorted, moving pointers intelligently avoids O(n²).
 * - Left pointer increases sum, right pointer decreases sum → guaranteed convergence.
 *
 * Time Complexity: O(n)  (each element is visited at most once)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
   let l = arr.length; 
   let left = 0;
   let right = arr.length-1;
   
   while(left <= right){

    let sum = arr[left] + arr[right];        
    if(sum == target) {
        return [left+1,right+1];
    }
    if(sum < target){
        left++;
    } else {
        right--;
    }
   }

};