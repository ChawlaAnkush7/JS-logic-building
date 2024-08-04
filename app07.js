// Question => write a function to genrate a multiplication table of a given number.
// Solution =>
function tableOfNumber(tableOf, tableTill) {
    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${tableOf * i}`)
    }
}
tableOfNumber(4, 10);

//Another Way

function numberTable(tableOf, tableTill) {

    for (let i = tableOf; i <= tableOf * tableTill; i += tableOf) {
        console.log(i)
    }
}
numberTable(4, 10)