// Binary search is an algorithm to search for a value in a sorted array.
// We can apply binary search to only sorted arrays.

// Binary Search is a fast way to find an element in a sorted array by repeatedly dividing the search space in half.

// Instead of checking each element one by one (like Linear Search), Binary Search says:

// “I’ll look in the middle. If it’s not what I want, I’ll cut the search space in half and try again.”


// Time complexity:
// | Search Type       | Time Complexity |
// | ----------------- | --------------- |
// | Linear Search     | O(n)            |
// | **Binary Search** | **O(log n)**    |

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(right>=left){
        let middle = Math.floor((left+right)/2);
        if(nums[middle] == target){
            return middle;
        } else if(nums[middle]<target){
            left = middle+1;
        } else {
            right = middle-1;
        }    
    }
    return -1;
};