// 🧠 What is Insertion Sort?
// Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time — just like how we sort playing cards in our hands. 🃏

// 💡 Real-Life Analogy:
// Imagine you're holding a hand of cards. You pick up one card at a time and insert it into the correct position among the cards you've already sorted.
// This is exactly what Insertion Sort does.

// 🔁 How It Works (Step-by-Step):
// Start from the second element (index 1).

// Compare it with the elements before it.

// Keep shifting larger elements to the right.

// Insert the current element into its correct position.

// Repeat this process for all elements.

let arr = [7,4,3,5,1,2];

for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];       // current value to insert
    let pre = i - 1;        // previous index
    // Shift elements greater than cur to the right
    while (arr[pre] > cur && pre >= 0) {
        arr[pre + 1] = arr[pre];
        pre--;
    }
    // Place current value in the right position
    arr[pre + 1] = cur;
}

console.log(arr); // ➡️ [1, 2, 3, 4, 5, 7]
