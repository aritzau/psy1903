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

/* Get Odd numbers
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
*/

//task 7 filter numbers
function filterNumbers(numbers, evenOrOdd) {
    let results = [];

    for (let i = 0; i < numbers.length; i++) {
        let Num = numbers[i];

        if (evenOrOdd == "even" && Num % 2 == 0) {
            results.push(Num);
        } else if (evenOrOdd == "odd" && Num % 2 !== 0) {
            results.push(Num);
        }
    }

    return results;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 'even'));


















// Even/Odd Response Time Task 8

// welcome alert followed by the for loop

/*alert(
    "Welcome to the even/odd response time task." +
    "You are about to see a series of numbers." +
    "If the number you see is EVEN, type the letter 'e'." +
    "If the number you see is ODD, type the letter 'o'." +
    "Please answer as quickly and accurately as possible."
);

let evenOdd = [];

for (let i = 0; i < 5; i++) {

    let number = Math.floor(Math.random() * 20) + 1;

    let start = Date.now()

    let response = prompt(`Number: ${number}
        Type the letter "e" for EVEN  
        Type the letter "o" for ODD.`);


    let end = Date.now();

    let responseTime = ((end - start) / 1000);


    if (response == null) response = "";

    response = response.trim().toLowerCase();


    let Even = number % 2 === 0;
    let correct = (response == "e" && Even) || (response == "o" && !Even);


    evenOdd.push({
        number: number,
        response: response,
        correct: correct,
        responseTime: +responseTime.toFixed(2),
    });

    console.log(evenOdd);
}
alert("Thank you for participating in the experiment!");
*/





