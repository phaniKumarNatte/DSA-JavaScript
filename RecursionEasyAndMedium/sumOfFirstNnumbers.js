// Recursion:
// function call it self to solve smaller versions of the same problem.

// Two parts of Recursion:
// 1. Base Case: stop condition(when to stop calling the function)
// 2. Recursive Case: part where function calls itself.

// >>>>>>>>>>>>>>>>>>>>>>>

// Stack Overflow:
// When a function calls itself too many times without reaching the base case, it can lead to a stack overflow error.


function sum(n){
    if( n==0 ) return 0;
    return n+ sum(n-1);
}
console.log(sum(6));