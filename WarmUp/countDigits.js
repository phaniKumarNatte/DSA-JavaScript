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

let n = -10;

let count = 0;
n = Math.abs(n);
if (n == 0) {
    count = 1; 
}    
while (n > 0) {
    n = Math.floor(n / 10);
    count++
}

// # console.log('count--', count)

let no = 12345;
let digits = Math.floor(Math.log10(no)) + 1;
console.log(digits); // 👉 5
