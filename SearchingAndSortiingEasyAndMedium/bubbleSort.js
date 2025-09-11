// Example 1: shows the inline way (good for understanding + dry run practice).

// Bubble Sort is a simple sorting algorithm that repeatedly compares two adjacent elements and swaps them if they are in the wrong order.

// It’s called “bubble” sort because the largest values “bubble up” to the end of the array with each pass.

let arr = [5, 3, 1, 4];
for(let i =0;i<arr.length-1;i++){
    let swapped = false;
    for(let j = 0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
            swapped = true;
        }
    }
    if(!swapped) break;
}

console.log(arr);

// Example 2: shows the reusable function (good for clean usage).


function bubbleSort(arr) {
    let n = arr.length;

    // Loop through the entire array
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent values
            if (arr[j] > arr[j + 1]) {
                // Swap if in wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }
        }

        // If no swaps were done, array is already sorted
        if (!isSwapped) break;
    }

    return arr;
}
console.log(bubbleSort([5, 3, 1, 4])); // Output: [1, 3, 4, 5]


