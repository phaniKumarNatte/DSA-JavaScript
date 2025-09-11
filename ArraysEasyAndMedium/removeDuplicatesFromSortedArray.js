// 26. Remove Duplicates from Sorted Array

// Given an integer array nums => number can be negative/positive/zero
//  sorted , increasing Order => [1,2,4 ,8 , 12...]
//  Decreasing sorted order => [10, 8,6,2,1 ...] 
// non-decreasing order : The elements in a list or array are arranged from smallest to largest, but duplicate (equal) values are allowed => [1, 2, 2, 3, 4, 4, 5]
//  a[i + 1] >= a[i] it can have duplicate 
// *  when every it says in-place word means we don't have to create new array and put elements over there modify the existing arrays and array should be sorted have unique elements.
 
// [0 0 1 1 1 2 2 3 3 4 ] =>in-place [0,1,2,3,4, _ _ _ _ ]
// example : [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10] 
// output : [1,2,3,4,5,6,7,8,9,10] 

//  Th relative order of the elements should be kept the same. Means the order should be [1,2,3,4,5,6,7,8,9,10] not [1,3,5,7,9,2,4,6,8,10]




let arr = [0,0,1,1,1,2,2,3,3,4];
let x = 0; 
for(let i = 0; i<arr.length; i++){
    if(arr[i]> arr[x]){
        x++;
        arr[x] = arr[i]
    }
}
console.log(x++);



// Important Points : 
// Non-decreasing order: The array is sorted such that elements can stay the same or increase: nums[i] <= nums[i+1].

// Examples:
// Valid: [1, 1, 2, 3, 3, 5]
// Invalid: [3, 2, 1] (this is decreasing)

// In-place: You must modify the given nums array itself.
// Note : You are not allowed to use extra arrays for storing the result.

// Approach
// x = 0: Pointer to track the last unique element’s position.
// Loop through the array from i = 0 to nums.length.
// Compare nums[i] > nums[x]:
// If true (new unique value), increment x and update nums[x] = nums[i].
// This shifts the unique value forward in the array.
// At the end, x + 1 gives the count of unique elements.
// Time Complexity (TC):
// The function uses a single loop that iterates through the entire array once.
// Each iteration performs constant-time operations (comparisons and assignments).
// Time Complexity = O(n), where n = nums.length.
// Space Complexity (SC):
// The function modifies the array in-place.
// Uses only a few extra variables: x and i.
// Space Complexity = O(1) (constant extra space).
// Dry Run

// Input: [1, 1, 2, 3, 3, 5]

// Initial state:
// x = 0

// i = 0: nums[i] = 1, nums[x] = 1 → NOT greater → skip
// i = 1: nums[i] = 1, nums[x] = 1 → NOT greater → skip
// i = 2: nums[i] = 2, nums[x] = 1 → GREATER → x=1, nums[1] = 2
// i = 3: nums[i] = 3, nums[x] = 2 → GREATER → x=2, nums[2] = 3
// i = 4: nums[i] = 3, nums[x] = 3 → NOT greater → skip
// i = 5: nums[i] = 5, nums[x] = 3 → GREATER → x=3, nums[3] = 5

// Final array: [1, 2, 3, 5, 3, 5]
// Unique count: x + 1 = 4
// Output: 4 (First 4 elements are unique: [1, 2, 3, 5])