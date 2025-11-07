let response = prompt("What is 4+ 6?");

let feedback = "";

let correctAnswer = ("The expected answer is 10.");

if (response == 10) {
    feedback = ("You got it Correct!");
} else if (response == 9 || response == 11) {
    feedback(" You almost got it correct !");
} else {
    feedback = ("You got it incorrect!");


}
alert(feedback + "The expected answer is 10!");


