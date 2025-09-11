// Selection Sort is a simple sorting algorithm. It works like this:

// Go through the array and find the smallest element. Swap it with the first element.

// Then go to the rest of the array (excluding the first), find the smallest again, and swap it with the second element.

// Repeat this process until the array is fully sorted.s

let arr = [7,1,5,4,3,2];
n = arr.length;
for(let i=0;i<n-1;i++){
    let min = i;
    for(let j = i+1;j<n;j++){
        if(arr[j]<arr[min]) {
            min = j;
        }
    }
    
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}


console.log(arr); //[ 1, 2, 3, 4, 5, 7 ]

