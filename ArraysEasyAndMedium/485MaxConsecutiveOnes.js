// The Math.max() function is used to find the largest (maximum) number from a list of numbers.
// ✅ Syntax:
// Math.max(number1, number2, ..., numberN)

// console.log(Math.max(5, 10, 3)); // 👉 10
// console.log(Math.max(-2, -5, -1)); // 👉 -1
// console.log(Math.max(1.5, 2.5, 0.5)); // 👉 2.5


// Q.Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// solution: 
 nums = [1,1,0,1,1,1,0,1,1,0,1,1,1,1]
// Output: 3
let currCount = 0;
    let maxCount = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums[i] ==1){
            currCount++;
        } else {            
            maxCount = Math.max(maxCount,currCount);
            currCount = 0;
        }
    }
    
console.log(Math.max(maxCount,currCount));