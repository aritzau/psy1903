/*
celsiusToFharenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

console.log(celsiusToFahrenheit(10))
*/


/*convertTemp
function convertTemp(temp, convertTo) {
    if (convertTo == "c") {
        // Fahrenheit to Celsius conversion
        return (temp - 32) / 1.8;
    }
    else {
        (convertTo == "f")
        // Celsius to Fahrenheit conversion
        return (temp * 1.8) + 32;
    }
}
console.log(convertTemp(10, 'c'));
*/

/* getWordLengths
function getWordLengths(words) {
    return words.map(word => word.length);
}

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
console.log(getWordLengths(words));
*/


/*getLongestWord

function getLongestWord(words) {
    let LongestWord = ("");

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWord.length > LongestWord.length) {
            LongestWord = currentWord; // update if current is longer
        }
    }
    return LongestWord;

}

trialrun
let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
console.log(getLongestWord(words));
*/

//Get Odd numbers
function getOddNumbers(numbers) {
    let results = [];
    //loop

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];


        if (number % 2 != 0) {
            results.push(number);
        }

    }
    return results;
}
console.log(getOddNumbers([1, 2, 3, 4, 5]));



