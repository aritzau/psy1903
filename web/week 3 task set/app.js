let num10uput = document.getElementById("num1");
let num20uput = document.getElementById("num2");
// identifying elements on the page that we will explore

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
// generating random numbers to display on page load

num10uput.innerHTML = randomNum1
num20uput.innerHTML = randomNum2
//update elements on the page

//Random number
let start = Date.now();
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let response = prompt(`What is  ${num1}  +  ${num2}  ?`);
let end = Date.now();
let TimetoRespond = (end - start) / 1000;
let CorrectAnswer = num1 + num2

if (response == CorrectAnswer) {
    alert("You answered " + response + " in " + TimetoRespond + " seconds. Your Response was CORRECT");
} else if (response != CorrectAnswer) {
    alert("You answered " + response + " in " + TimetoRespond + " seconds. Your Response was INCORRECT");
}

let start2 = Date.now();
let num3 = Math.floor(Math.random() * 100) + 1;
let num4 = Math.floor(Math.random() * 100) + 1;
let Response2 = prompt(`What is  ${num3}  +  ${num4}  ?`);
let end2 = Date.now();
let TimetoRespond2 = (end - start) / 1000;
let CorrectAnswer2 = num3 + num4

if (Response2 == CorrectAnswer2) {
    alert("You answered " + Response2 + " in " + TimetoRespond2 + " seconds. Your Response was CORRECT");
} else if (Response2 != CorrectAnswer2) {
    alert("You answered " + Response2 + " in " + TimetoRespond2 + " seconds. Your Response was INCORRECT");
}

let start3 = Date.now();
let num5 = Math.floor(Math.random() * 100) + 1;
let num6 = Math.floor(Math.random() * 100) + 1;
let Response3 = prompt(`What is  ${num5}  +  ${num6}  ?`);
let end3 = Date.now();
let TimetoRespond3 = (end - start) / 1000;
let CorrectAnswer3 = num5 + num6

if (Response3 == CorrectAnswer3) {
    alert("You answered " + Response3 + " in " + TimetoRespond3 + " seconds. Your Response was CORRECT");
} else if (Response3 != CorrectAnswer3) {
    alert("You answered " + Response3 + " in " + TimetoRespond3 + " seconds. Your Response was INCORRECT");
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

let WholeNumber = prompt("Please enter a whole number");
if (WholeNumber % 2 == 0) {
    alert("The number you entered was even")
} else {
    alert("The number you entered was odd");
}


//random number with feedback
///alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.");








