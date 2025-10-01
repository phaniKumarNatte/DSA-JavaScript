// // Differece between map = {} and map = new Map()
// 1. If you write
// let map = {};

// This is just a plain object.

// It does not have .has(), .get(), or .set().

// You can only use property checks like map[s[j]] or map.hasOwnProperty(s[j]).

// 🔹 What is hasOwnProperty()?

// hasOwnProperty() is a method available on plain JavaScript objects ({}).

// It checks whether the object itself contains the given property as its own key, not inherited from the prototype chain.

// 2. If you write
// let map = new Map();

// This is a real Map object (built-in in JavaScript).

// It supports methods like:

// .has(key) → check if key exists

// .get(key) → get value

// .set(key, value) → store value

// Safer for your use case because you don’t hit the “0 is falsy” issue.

// ✅ So if you want to use .has(), you must do:

// let map = new Map();

// ============================================================================================

// Why let maxL = maxR = []; causes issues in JavaScript
// Problem:

// When solving 42. Trapping Rain Water, I wrote:
// let maxL = maxR = [];
// Then after building the arrays for input [4,2,0,3,2,5],
// I expected: maxL = [4,4,4,4,4,5] maxR = [5,5,5,5,5,5]
// But instead, I got:
// maxL = [5,5,5,5,5,5]
// maxR = [5,5,5,5,5,5]

// Why this happens:

// In JavaScript, the statement:
// let maxL = maxR = [];

// does not create two separate arrays.

// Instead:
// maxR = [] creates a new empty array.
// maxL = maxR assigns the same reference to maxL.

// So now: maxL → [ ] ← maxR Both variables point to the same array in memory.

// Consequence:
// Any change made through maxL also affects maxR.
// Any change made through maxR also affects maxL.

// That’s why both ended up as:
// [5,5,5,5,5,5]

// Key Takeaway 🚀

// Use separate array declarations when you need independent arrays:
// let maxL = [];
// let maxR = [];
// Remember: = in JavaScript assigns references for objects (like arrays), not copies.

// ============================================================================================

// let maxL = maxR = 0;

// maxR = 1;

// console.log(maxL); // 0
// console.log(maxR); // 1

// ✅ So primitives are independent copies, not shared references like arrays/objects.

// ⚡ Quick summary:

// Objects/arrays/functions → assigned by reference (both variables point to the same memory).

// Primitives (number, string, boolean, null, undefined, symbol, bigint) → assigned by value (each variable holds its own copy).

// ========================================================================================================================================

// how to create 26 indexed empty array in javascript
// In JavaScript, you can create an array of 26 elements (indexed from 0 to 25) in different ways depending on what you want inside (empty slots or filled with some value).

// ✅ Option 1: Truly empty array of length 26

// let arr = new Array(26);
// console.log(arr.length); // 26
// console.log(arr);        // [ <26 empty items> ]
// // ⚠️ But note: these are empty slots, not undefined — you cannot directly map over them.

// ✅ Option 2: Array filled with null or 0 (better for iteration)
// let arr = new Array(26).fill(0);
// console.log(arr); 
// [0, 0, 0, 0, 0, ... 0] (26 times)

