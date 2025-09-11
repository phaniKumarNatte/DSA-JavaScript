// Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: The first 2 elements should be 2. Underscores represent irrelevant values.
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: The first 5 elements should be 0, 1, 3, 0, and 4.


// problem 2 : 
let nums = [2, 7, 11, 15]
let target = 9


var twoSum = function(nums, target) {  
    
  for(let i = 0; i<nums.length;i++){      
    if(nums[i] + nums[i+1] == target){        
        return [i,i+1]
    }
  }  
};
console.log(twoSum(nums, target))


