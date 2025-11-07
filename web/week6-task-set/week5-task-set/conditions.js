
//Each loop iteration should create one trial object with num1, num2, and correctAnswer, and then add it to the conditions array.

/* question 3

let conditions = [];
for (let i = 0; i < 3; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = (num1 + num2);
    // put this into the array
    conditions.push({ num1, num2, correctAnswer });
}
console.log(conditions);
*/


let mathTrials = [];
for (let i = 0; i < 3; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2;
    mathTrials.push({ num1, num2, correctAnswer });
};

let wrongAnswer = correctAnswer + (Math.floor(Math.random() * 5) + 1)


mathTrials.push({
    num1: num1,
    num2: num2,
    correctAnswer: correctAnswer,
    wrongAnswer: wrongAnswer
});




