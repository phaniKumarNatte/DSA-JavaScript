// The slice() method is used to copy part of an array or string, without changing the original.

// Syntax:
//  array.slice(start, end)
//     - start: The index where to start (included)

//     - end: The index where to stop (not included)

//     - It returns a new array with the selected elements


// nums1 = 

// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6]
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// let nums1 = [1,2,3,0,0,0]; let m = 3; 
// let nums2 = [2,5,6]; let n = 3;
// numss

// case2 : second approch


let nums1 = [1,2,3,0,0,0]; let m = 3; 
let nums2 = [2,5,6]; let n = 3;
// nums1 = [1], m = 1, nums2 = [], n = 0;
let p1 = m-1;
let p2 = n-1;

for(let i = m+n-1;i>=0;i--){
    if(p2 <0){
        break;
    }
    if(p1>=0 && nums1[p1]>nums2[p2]){
        nums1[i] = nums1[p1];
        p1--;
    } else {
        nums1[i]  = nums2[p2];
        p2--;
    }
}
console.log(nums1)