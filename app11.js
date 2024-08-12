//Question => Write a function to calculate the vowels and consonents in the given string ?
//Solution =>

function calculateVowelsConsonents(input) {
    input = input.toLowerCase().replace(/ /g, "");

    console.log(input)
    const vowels = "aeiou";
    const consonents = "bcdfghjklmnpqrstvwxyz";
    let vowelsCount = 0;
    let consonentsCount = 0;
    for (let i = 0; i <= input.length - 1; i++) {
        if (vowels.includes(input[i])) {
            vowelsCount++;
        }
        else if (consonents.includes(input[i])) {
            consonentsCount++;
        }
        else {
            console.log(input[i] + " is not a string")
        }
    }
    return { vowelsCount, consonentsCount };
}
console.log(calculateVowelsConsonents("Hello 123 World Ankush"));