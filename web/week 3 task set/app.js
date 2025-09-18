let num10uput = document.getElementById("num1");
let num20uput = document.getElementById("num2");
// identifying elements on the page that we will explore

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
// generating random numbers to display on page load

num10uput.innerHTML = randomNum1
num20uput.innerHTML = randomNum2
//update elements on the page


// Create variables to store references to elements on the page
let num1s = document.getElementsById('num1');
let num2s = document.getElementById('num2');
let response1 = document.getElementById("response");
let feedback = document.getElementById("Feedback");
let form = document.getElementById("form")

//generating numbers
let Num1 = Math.floor(Math.random() * 100) + 1;
let Num2 = Math.floor(Math.random() * 100) + 1;
let correctAnswer = Num1 + Num2;

//putting numbers on a page
num1s.textContent = Num1;
num2s.textContent = Num2;

let Start = Date.now();

//form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.style.display = 'none';
    let end = Date.now();

    let TimetoRespond = (end - Start) / 1000;

    let response = Number(response.value);


    if (response == correctAnswer) {

        feedback.textContent = "You answered " + response + " in " + TimetoRespond + " seconds. Your Response was CORRECT";

    } else if (response != correctAnswer) {
        feedback.textContent = "You answered " + response + " in " + TimetoRespond + " seconds. Your Response was INCORRECT";

    }

})


