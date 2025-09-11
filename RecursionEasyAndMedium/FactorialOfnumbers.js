let fac = 5;
function fact(n){
    if(n==1) return 1;
    
    return n*fact(n-1);
}
console.log(fact(fac));
// // Example: Factorial of a number
// // Factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
// // Base Case: if n is 1, return 1