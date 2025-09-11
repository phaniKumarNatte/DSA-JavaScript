const isPalindrome = (n) => {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return false; // Only positive integers are considered
    }

    let original = n;
    let reversed = 0;

    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return original === reversed;
};

console.log(isPalindrome(131));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false

// another approce : for(let i =0;i<Array.length-i-1;i++)
