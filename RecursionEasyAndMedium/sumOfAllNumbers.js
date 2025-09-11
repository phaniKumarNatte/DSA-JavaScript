// arr = [5,3,2,0,1];
// - sum of all elements in an array using recursion.
// - sum of all Odd elements in an array using recursion.

// arr = [5,3,2];
// function sum(n){
//     if(n==0) return arr[n];
//     return arr[n] + sum(n-1);
// }
// console.log(sum(arr.length-1));

arr = [5,3,2,2,1,1,9];
function sum(n){
    
    let isOdd = arr[n] % 2;
    if(n==0) return isOdd ? arr[n] : 0;
    if(isOdd){
        return arr[n] + sum(n-1);
    } 
    return sum(n-1)
}
console.log(sum(arr.length-1));




