//Question => write a function to print the factorial for the given number ?
//Solution =>
function calculateFactorial(input) {
    if (input < 0) {
        throw new Error("number should be positive")
    }

    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i
    }
    return result;
}
console.log(calculateFactorial(3));

//Another Way -Using Recursion
function calculateFactorial2(num) {
    if (num < 0) {
        throw new Error("number should be positive")
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calculateFactorial2(num - 1);
}
console.log(calculateFactorial2(5))