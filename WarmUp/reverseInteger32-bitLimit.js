const reverseNumber = function (number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return "Please enter a valid number";
    }

    const isNegative = number < 0;
    number = Math.abs(number);
    let reverse = 0;

    while (number > 0) {
        reverse = (reverse * 10) + (number % 10);
        number = Math.floor(number / 10);
    }

    if (reverse > 2 ** 31 - 1) {
        return "Overflow: reversed number exceeds 32-bit limit";
    }

    return isNegative ? -reverse : reverse;
};

console.log(reverseNumber(12345));     // ➤ 54321
console.log(reverseNumber(-987));      // ➤ -789
console.log(reverseNumber(2 ** 31));   // ➤ Overflow
