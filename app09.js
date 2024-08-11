// Question => write a function to check a given string is a palindrome or not ?
// Solution =>
function checkPalindrome(input) {
    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("madam"))

//Another way

function checkPalindrome2(input) {
    let start = 0;
    let end = input.length - 1;
    for (start; start <= end; start++, end--) {
        // console.log(start, end)
        if (input[start] !== input[end]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome2("level"))

//Another way
function checkPalindrome3(input) {
    let reverseInput = input.split("").reverse().join("");
    return input === reverseInput ? true : false;
}
console.log(checkPalindrome3("nadan"));

//Another way
function checkPalindrome4(input) {
    let start = 0;
    let end = input.length - 1;
    for (start; start <= Math.ceil(end / 2); start++, end--) {
        console.log(start, end)
        if (input[start] !== input[end]) {
            return false
        }
    }
    return true
}
console.log(checkPalindrome4("levvel"))