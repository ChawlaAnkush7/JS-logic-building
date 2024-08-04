// Question => write a function to find the maximum element from a array of numbers.
// Solution =>
function maxElem(input) {
    if (!input || input.length === 0) {
        throw new Error("there must be some elements in the array")
    }
    let maxNum = input[0]
    for (let i = 1; i < input.length; i++) {
        if (input[i] > maxNum) {
            maxNum = input[i]
        }
    }
    return maxNum;
}
console.log(maxElem([2, 5, 8, 4, 9, 28]));

//Another Way

function findMaxArrayElem(input) {
    console.log(Math.max(...input))
        ;
}
findMaxArrayElem([2, 15, 4, 8])
