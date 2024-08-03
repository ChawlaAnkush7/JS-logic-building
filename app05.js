//Question => write a function to check the given year is a leap year or not a leap year ?
//Solution =>
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`)
    }
    else {
        console.log(`${year} is not a leap year`)

    }
}

isLeapYear(2200);