//Question 4 =>write a function that tells if a given number is even or odd ?
//Solution =>
function checkOddEven(a) {
    // if (a % 2 === 0) {
    //     console.log(`${a} is a even number`)
    // }
    // else {
    //     console.log(`${a} is a odd number`)
    // }

    return a % 2 === 0 ? "even number" : "odd number"
}
console.log(checkOddEven(34));
checkOddEven(-65);


//Question 5 => write a function that finds and prints the smallest number among the given three numbers ?
//Solution =>
function findSmallest(a, b, c) {
    if (a < b && a < c) {
        console.log(`${a} is the smallest number`)
    }
    else if (b < a && b < c) {
        console.log(`${b} is the smallest number`)
    }
    else if (c < a && c < b) {
        console.log(`${c} is the smallest number`)
    }
    else {
        if (a === b && b === c) {
            console.log(`all are equal`)
        }
        else if (a === b && c < a) {
            console.log(`${c} is the smallest number`)
        }
        else if (a === c && b < a) {
            console.log(`${b} is the smallest number`)
        }
        else if (b === c && b < a) {
            console.log(`${b} is the smallest number`)
        }
        else {
            console.log(`${a} is the smallest number`)
        }
    }
}
// findSmallest(-1, -6, 0);
findSmallest(1 / 4, 1 / 8, -5)