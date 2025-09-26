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

// getWordLengths
function getWordLengths(words) {
    return words.map(word => word.length);
}

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
console.log(getWordLengths(words));
