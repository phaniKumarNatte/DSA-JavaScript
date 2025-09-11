// 150. Evaluate Reverse Polish Notation
// You are given an array of strings `tokens` that represent an arithmetic expression in Reverse Polish Notation (RPN).
// Evaluate the expression and return its integer value.
// Note: 
// - Valid operators: '+', '-', '*', '/'.
// - Division should truncate towards zero.
// - Operands are integers, may be negative.
//
// Example:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
//
// Approach (Stack-based):
// - Use a stack to store operands.
// - Traverse tokens one by one:
//   • If token is a number → push into stack.
//   • If token is an operator → pop top 2 numbers (b, a), apply operation (a op b), push result back.
// - At the end, the stack has one element which is the result.
//
// Key points:
// - Use `map` to store operator functions for clean code.
// - For division, use `Math.trunc()` to ensure truncation towards 0 (important for negative numbers).
// - Time O(n), Space O(n).

var evalRPN = function(arr) {
    let stack = [];
    let map = {
        '*' : (a, b) => (a * b),
        '+' : (a, b) => (a + b),
        '-' : (a, b) => (a - b),
        '/' : (a, b) => Math.trunc(a / b)
    };

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(map[arr[i]](b, a));
        } else {
            stack.push(+arr[i]); // convert string to number
        }
    }
    return +stack.pop();
};
