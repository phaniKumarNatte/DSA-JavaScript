

// 1.Time & Space Complexity : It is used to measure efficiency of an algorithm, in terms of speed, as the input size grows. 
// 2. Time Complexity is not equal to time taken by an algorithm to run.
// 3. time Taken can be anything based on system it run speed slow or fast.
// The import point is speed efficiency of an algorithm is when input size grows.
// The worst case time complexity we represent using Big O Notation.

// 💡 What is Big O Notation?
// - Big O notation is a way to describe how much longer your code takes when you give it more data.
// example
// 🎯 Think of it like this:
//     Imagine you're checking names on a list.

//     If the list has 5 names, it’s easy.

//     If it has 5,000 names, it takes longer.

//     If it has 5 million names, it might take forever!

//     👉 Big O tells you how much slower it gets when the list grows.


// * It tells us the efficiency of an algorithm in terms of:

// * Time complexity (how long it takes)

// * Space complexity (how much memory it uses)

// 1. O(n) => linear Search 
//     Example: for (let i = 0; i < n; i++) {
//         (n operations)
//     }
//     x = n
// 2. O(logn) => Binary Search
//     Example: n,n/2,n/4,n/8,n/16...1
//     x = logn

// 3. O(nlogn) => Merge Sort
//     We can imagine when logn is there we are dividing the array into half and then performing some operation on it.
//     Example: n,n/2,n/4,n/8,n/16...1
//     x = nlogn
//     for (let i = 0; i < n; i++) {
//         {n,n/2,n/4,n/8,n/16...1 
//             // here we are dividing the array into half and then performing some operation on it.
//         }
        
//     }
//     x = nlogn

// 4. O(n^2) => Bubble Sort
//     When ever we see nested loop the time Complexity is O(n^2)
//     Example: 
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             (n^2 operations)
//         }
//     }
//     x = n^2
        
// 5. O(1) => Constant Time Complexity : it will take one operation.
//     Example: 
//     for (let i = 0; i < n; i++) {
//         (1 operation)
//     }
//     x = 1
// 6. O(n^3):
//      when we have seen 3 nested loop the time Complexity is O(n^3)
//      Example: 
//      for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let k = 0; k < n; k++) {
//                 (n^3 operations)
//             }
//         }
//     }
//     x = n^3
// 7. 2^n : 
//     // O(2ⁿ) means output or operations grow exponentially based on input size — not that the input size was doubled.
//     🔢 Example:
//     For n = 2 switches:

//     OFF, OFF

//     OFF, ON

//     ON, OFF

//     ON, ON

//     ✅ Total: 2² = 4 combinations
//     Example : 
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let k = 0; k < n; k++) {
//                 for (let l = 0; l < n; l++) {
//                     (n^4 operations)
//                 }
//             }
//         }
//     }
//     x = 2^n
    
// 8. O(n!) : 
// O(n!) (read as “order of n factorial”) means the number of operations grows faster than exponential — it grows factorially.

// 📌 That means:

// For n = 1 → 1 step

// For n = 2 → 2 steps

// For n = 3 → 6 steps (3 × 2 × 1)

// For n = 5 → 120 steps

// For n = 10 → 3,628,800 steps 😳

// It grows extremely fast.





// The order of time complexity from best to worst is:
// O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)

// space complexity : mean how much extra space we are using.
// example : find the 5th element in array. arr= [1,2,3,4,5,6,7,8,9,10]
//             arr[4] : time complexity is O(1) annd space complexity is O(1)
//         Example2: 
//             findMaxArray(arr){
//                 let max = arr[0]; // O(1) space complexity 
//                 for (let i = 1; i < arr.length; i++) {
//                     // O(n) time complexity
//                     if (arr[i] > max) {
//                         max = arr[i];
//                     }
//                 }
//                 return max;
//             } 


// // How to Analyze It?
// //  - Ignore constants and low-impact terms:

// //  - O(2n) → O(n)

// // - O(n + log n) → O(n)

// // You're always looking at the growth rate as input size increases.

// example : 
// for (let i = 0; i < n; i++) {

// }
// for (let j = 0; j < n; j++) { 

//     }
// 1.what is time complexity we are running two loop one anther other.
// Time complexity is O(n) + O(n) = O(2n) = O(n)
// // we will ignore constant.
// // when it is O(n) + O(n) + O(n) = O(3n) we will ignore constant 3 and it will be O(n)

// Example 2 : 
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         // O(n^2) time complexity
//     }
// }
// for (let k = 0; k < n; k++) {
//     // O(n) time complexity
// }

// // The time complexity of this is O(n^2) + O(n) = O(n^2 + n) = O(n^2)


// Example3 : 
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             // O(n^2) time complexity
//         }
//     }
//     for (let k = 0; k < n; k++) {
//         // O(n) time complexity
//     }
//     for (let l = 0; l < n; l++) {
//         // O(n) time complexity
//         for (let m = 0; m < n; m++) {
//             // O(n^2) time complexity
//         }
//     }
// // The time complexity of this is O(n^2) + O(n) + O(n^2) = O(2n^2 + n) = O(n^2)

// Example3:
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             // O(n^2) time complexity
//         }
//     }
//     for (let k = 0; k < n; k++) {
//         // O(n) time complexity
//     }
//     for (let l = 0; l < n; l++) {
//         // O(n) time complexity        
//     }

// // The time complexity of this is O(n^2) + O(n) + O(n) = O(n^2 + 2n) = O(n^2)

// // Note : It will alway be the greatest time complexity.
