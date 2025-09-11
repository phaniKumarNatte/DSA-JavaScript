
// Distinct numbers are numbers that are different from each other — no duplicates.

let arr = [7, 7, 7];  // try different inputs

if (arr.length < 2) {
  console.log("Array doesn't have enough elements");
} else {
  let max = -Infinity;
  let snMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      snMax = max;
      max = arr[i];
    } else if (arr[i] > snMax && arr[i] < max) {
      snMax = arr[i];
    }
  }

  console.log("Largest:", max);
  if (snMax === -Infinity) {
    console.log("No second largest found");
  } else {
    console.log("Second Largest:", snMax);
  }
}


