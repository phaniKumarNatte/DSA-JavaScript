// -Infinity is smaller than all numbers, so any number will replace it when searching for the largest.
// Infinity is larger than all numbers, so any number will replace it when searching for the smallest.

// - Infinity is a special numeric value representing positive infinity
// -Infinity represents negative infinity
// - Dividing a positive number by zero gives Infinity:
// console.log(1 / 0);  // Infinity
// -Infinity represents negative infinity
// console.log(-1 / 0);  // -Infinity

// 🔍 Key Properties

// console.log(Infinity > 999999999);    // true
// console.log(-Infinity < -999999999);  // true

// console.log(Infinity + 1);     // Infinity
// console.log(Infinity - 1000);  // Infinity
// console.log(-Infinity + 1000); // -Infinity


// let arr = [5, -2, 7, 1];
// let max = -Infinity;  // Start with the smallest possible value

// // 5 > -∞ = T ➡ max=5  
// // -2 > 5 = F ➡ max=5  
// // 7 > 5 = T ➡ max=7  
// // 1 > 7 = F ➡ max=7  

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];  // Update max if current number is greater
//   }
// }
// // i arr[i] i<arr.length arr[i]<max max
// // 0  5    0<5    5>-infinity  5
// // 1  -2   1<5    -2>5        5
// // 2  7    2<5    7>5         7
// // 3  1    3<5    1>7         7 

let arr = [5, -2, 7, 1];
// let smallest = infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }

// // i arr[i] i<arr arr[i]<smallest smallest 
// // 0  5    0<5    5<infinity  5
// // 1  -2   1<5    -2<5       -2
// // 2  7    2<5    7<-2       -2
// // 3  1    3<5    1<-2       -2


max = -Infinity;
snMax = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }  
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < max && snMax < arr[i]) {
     snMax = arr[i];
  }  
}
console.log('Maximum number: ', max);
console.log('smallest number: ', snMax);