// Question => write a function to get exponential of a given number to that given number ?
// Solution =>
function getExponentialValue(base, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= base
        // console.log(result, base);
    }
    return result;

}
console.log(getExponentialValue(2, 3))