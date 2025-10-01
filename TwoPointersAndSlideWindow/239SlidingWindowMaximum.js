arr = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]



// let i = 0;
let j = k;
result = [];
for(let i=0;i<arr.length-1;i++){

    if(arr[i] > arr[i++] && arr[i] > arr[j]){
        result.push(arr[i]); 
    } else if(arr[i++] > arrp[i] && arr[i++] > arr[j]){
        result.push(arr[i++]); 
    }  else {
        result.push(arr[j]); 
    }
}
