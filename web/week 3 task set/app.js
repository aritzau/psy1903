let num10uput = document.getElementById("num1");
let num20uput = document.getElementById("num2");
// identifying elements on the page that we will explore

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
// generating random numbers to display on page load

num10uput.innerHTML = randomNum1
num20uput.innerHTML = randomNum2
//update elements on the page

// rewriting code so that the two numbers are randomly generated
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;

let response = prompt(`What is  ${num1}  +  ${num2}  ?`);
let CorrectAnswer = num1 + num2

if (response == CorrectAnswer) {
    alert("Correct!");

} else if (response != CorrectAnswer) {
    alert("incorrect!");
}

let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
if (age >= 12 && age < 30) {
    alert('Teenager');
}
if (age >= 30) {
    alert("Adult");
}





















