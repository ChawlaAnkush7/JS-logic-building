//Question 1 => Print Hello World in the console ?
//Solution =>
console.log("Hello World")


//Question 2 => Write a function that calculates sum of two numbers ?
//Solution =>
function sum(a, b) {
    let sum = a + b;
    console.log(`sum of ${a} and ${b} is ${sum}`)
}
sum(12, 15);
sum(-1, -5);
sum(1.5, 2.5);


//Question 3 => write a function that calculates and prints area of a rectangle given its length and width ?
//Solution =>
function calculateArea(length, width) {
    if (length <= 0) {
        throw new Error("length can't be negative or equal to zero")
    }
    if (width <= 0) {
        throw new Error("width can't be negative or equal to zero")
    }
    let area = length * width;
    console.log(area);
}
// calculateArea(-12, 15);
// calculateArea(20, 0);
calculateArea(20, 15);