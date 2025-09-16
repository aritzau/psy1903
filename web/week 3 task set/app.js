let num10uput = document.getElementById("num1");
let num20uput = document.getElementById("num2");
// identifying elements on the page that we will explore

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
// generating random numbers to display on page load

num10uput.innerHTML = randomNum1
num20uput.innerHTML = randomNum2
//update elements on the page

