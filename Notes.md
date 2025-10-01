<!-- // Distinct numbers are numbers that are different from each other — no duplicates.
// // -Infinity is smaller than all numbers, so any number will replace it when searching for the largest.
// // Infinity is larger than all numbers, so any number will replace it when searching for the smallest.

The Math.max() function is used to find the largest (maximum) number from a list of numbers.
// ✅ Syntax:
// Math.max(number1, number2, ..., numberN)


// # Math.floor(): Round Down 
// # It always goes down (toward −∞), even for negative numbers.

// # Math.floor(4.9);   // 👉 4
// # Math.floor(4.1);   // 👉 4
// # Math.floor(-4.1);  // 👉 -5

// # Math.ceil(): Round Up
// # It always goes up (toward +∞), even for negative numbers.
// # Math.ceil(4.1);    // 👉 5
// # Math.ceil(4.9);    // 👉 5
// # Math.ceil(-4.1);   // 👉 -4

// # Math.round(): Round to Nearest Integer
// # It rounds to the nearest integer, but if the fractional part is exactly 0.5, it rounds to the nearest even number.
// # Math.round(4.1);   // 👉 4
// # Math.round(4.9);   // 👉 5
// # Math.round(-4.1);  // 👉 -4
// # Math.round(-4.9);  // 👉 -5

// # * Math.abs(): Absolute Value Function
// # Math.abs(5);     // 👉 5
// # Math.abs(-5);    // 👉 5
// # Math.abs(0);     // 👉 0
// # Math.abs(-3.14); // 👉 3.14

// 📘 What is Relative Order?
// Relative order means the original order or position of elements compared to each other stays the same — even if you move or filter them.
//  The relative order of the elements should be kept the same. Means the order should be [1,2,3,4,5,6,7,8,9,10] not [1,3,5,7,9,2,4,6,8,10]


String:
* trim() Removes the extra spaces front end and back.
* split("_") ->Gives you an array of words.

set():
finding an element inside a set {a,b,c} is take O(1)  time complexity.
Example set a = {a,b,c} answ : a.has(c) this concept is called hasings

28th july : 
✅ What is a HashMap?
A HashMap is a data structure that stores key-value pairs.

You give it a key, and it gives you back the value — fast.

Think of it like a real dictionary:

You look up a word (key)

And you get its meaning (value)

Example:
let map = {
  "name": "Gagadhar",
  "age": 25,
  "city": "Hyderabad"
};

- "name" is a key → value is "Gagadhar"
- "age" is a key → value is 25


🚀 How to use a HashMap in JavaScript?
In JavaScript, you can use either:

Plain Object {}

Or the Map class (from ES6)

📌 Using Object:
let map = {};
map["fruit"] = "Apple";
console.log(map["fruit"]); // Apple

Using Map:
let map = new Map();
map.set("fruit", "Apple");
console.log(map.get("fruit")); // Apple

🧠 When to use HashMap?
Use it when you want to store and retrieve data quickly using keys.

🔥 Example Use Cases:
- Counting how many times each letter appears in a string
- Storing user ID and their data
- Tracking frequency of numbers
- Detecting duplicates
- Implementing LRU cache
- Mapping names to phone numbers, etc.

⚡ Why is HashMap powerful?
Because it gives:
O(1) time complexity (on average) for:
- insert, delete,lookup. That means it's very fast!

✅ Summary

| Concept      | Meaning                               |
| ------------ | ------------------------------------- |
| Key          | Unique identifier (like a name)       |
| Value        | Data you want to store                |
| Insert       | `map[key] = value` or `map.set(k, v)` |
| Access       | `map[key]` or `map.get(k)`            |
| Time Complex | O(1) on average                       |



what is object.keys() ?

Object.keys() is a built-in JavaScript method used to get an array of the keys (property names) of an object.
Syntax : 
Object.keys(object)

Input: an object

Output: an array of strings (the object’s own enumerable property names)

const user = {
  name: 'John',
  age: 30,
  isAdmin: true
};

const keys = Object.keys(user);
console.log(keys); // ['name', 'age', 'isAdmin']

🧾 Notes:
It works only on objects, not Map.

If you use it on an empty object, it returns an empty array: Object.keys({}) → []

It ignores non-enumerable and symbol properties.

💡 When to use:
- When you want to loop through keys in an object.
- When you need to count properties:

🧠 Important Reminder:
Object stores keys as strings only.

29th : 
Strings are immutable
 exampel str = "phani"
 console.log(str[0]); // p
 we can update it like str[0] = k
 To do the you need to convert str to array, using split("")
 now s[0] = k // 


problem : 1903;
https://leetcode.com/problems/largest-odd-number-in-string/description/
| Use Case                               | Recommended         |
| -------------------------------------- | ------------------- |
| Converting **clean number strings**    | `Number()` or `+`   |
| Parsing numbers from **messy strings** | `parseInt()`        |
| Checking if a **digit is odd or even** | `+s[n] % 2 === 1` ✅ |

O(nxm) 
n number of string ['str1','str2','str3'];
m max length of each string.

==========================================================================================

The meaning of “num1 is a subset of num2” is:

👉 Every element (value) that exists in num1 also exists in num2.

In set theory terms:

If num1 = {1, 2} and num2 = {1, 2, 3, 4}, then num1 is a subset of num2. ✅

But if num1 = {1, 5} and num2 = {1, 2, 3, 4}, then num1 is not a subset of num2 because 5 is missing in num2. ❌


==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== 
remember this : next grater , next small, previous small, previous grater alway use stack 
Remember This.Binary Search : Binary Search is only applicable for sorted arrays.
Distinct values means values that are unique—no duplicates.
NOTE : Two-pointer only works on sorted arrays.

==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== 

✅ Ascending Order vs Non-Decreasing Order

Ascending order usually means:

Every next element is strictly greater than the previous one.

Duplicates are NOT allowed.

Example: [1, 2, 3, 4] ✅
[1, 2, 2, 3] ❌ (because of duplicate 2)

Non-decreasing order means:

Every next element is greater than or equal to the previous one.

Duplicates are allowed.

Example: [1, 2, 2, 3, 3] ✅


// The Math.max() function is used to find the largest (maximum) number from a list of numbers.
✅ Syntax:
// Math.max(number1, number2, ..., numberN) 

==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== 
Math.abs() in JavaScript
The Math.abs() function returns the absolute value of a number.

👉 The absolute value means the number without its sign.
👉 If the number is positive, it stays the same.
👉 If the number is negative, it becomes positive.
👉 If the number is 0, it stays 0.

Syntax : 
Math.abs(x)

console.log(Math.abs(5));     // 5   (positive stays positive)
console.log(Math.abs(-5));    // 5   (negative becomes positive)
console.log(Math.abs(0));     // 0
console.log(Math.abs(-0));    // 0
console.log(Math.abs("10"));  // 10  (string converted to number)
console.log(Math.abs("abc")); // NaN (not a number, result is NaN)
console.log(Math.abs(null));  // 0   (null converted to 0)

-->


