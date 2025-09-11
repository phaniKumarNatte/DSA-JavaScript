// 📘 What is Relative Order?
// Relative order means the original order or position of elements compared to each other stays the same — even if you move or filter them.

// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
 
// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


let nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

let x = 0; 
for(let i = 0; i<nums.length;i++){
    if(nums[i] !== 0){
        nums[x] = nums[i];
        x++;
    }
}
for(let j = x;j<nums.length;j++){
    nums[j] =0;
}
console.log(nums);