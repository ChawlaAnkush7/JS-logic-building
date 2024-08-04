// Question => write a function to calculate sum of the digits of the given number.
// Solution =>

function calculateSumOfDigits(input) {
    if (input < 0) {
        throw new Error("input must be a positive number")
    }
    let inputString = input.toString();
    let splitString = inputString.split('');
    let result = 0;
    splitString.forEach((num) => {
        result += Number(num);
    })
    return result;
}
// console.log(calculateSumOfDigits(15));

// Another way

function calculateSumOfDigits2(input) {
    if (input < 0) {
        throw new Error("input must be a positive number")
    }

    let number = input;
    let sumOfDigits = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        // console.log(number)
        number = Math.floor(number / 10);
        // console.log(number)
        sumOfDigits += lastDigit;
    }
    return sumOfDigits;
}
console.log(calculateSumOfDigits2(125))
