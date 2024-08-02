//Question 5=> write a function that returns reverse of a given string ?
//Solution =>

function reverseString(a) {
    let result = '';
    for (let i = a.length - 1; i >= 0; i--) {
        result = result + a[i];
    }
    return result;
}
console.log(reverseString("Hello World"))

//Another way of reversing the string 

function reverseString2(b) {
    let splitString = b.split('');
    let reverseArray = splitString.reverse();
    let result = reverseArray.join('')
    console.log(result)
}
reverseString2("hello")