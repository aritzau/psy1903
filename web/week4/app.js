//console.log("Hello from week 4")

//let response = 10;
//let responseTime = 2.33;
//let feedback = "correct";

//console.log("You answered" + response + "in" + responseTime + "seconds. Your answer was" + feedback)

//let num1 = getRandomNumber(1, 10);
//let num2 = getRandomNumber(0, 100);

//console.log(num1);
//console.log(num2);

//displayRandomNumber();

//function getRandomNumber(min, max) {
//let randomNumber = Math.floor(Math.random() * max) + min;
//return randomNumber
//}

//function displayRandomNumber() {
// alert(getRandomNumber(1, 10));
//}

//let ages = [45, 23, 35, 35];

//let names = ["Alice", "James", "Avi", "Kyle"];
//let namesThatStartWithA = [];
//console.log(names[0]);
//names.push("sara");
//console.log(names)
//for (let name of names) {
//if (name.charAt(0) == "A") {
// namesThatStartWithA.push(name)
//}

//}
//console.log(namesThatStartWithA);

let results = [];
for (let i = 0; i < 3; i++) {
    let start = Date.now();
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let answer1 = prompt(`What is ${num1} + ${num2}?`);
    let end = Date.now();
    let ResponsE = (end - start) / 1000
    let answer = num1 + num2
    if (ResponsE == answer1) {
        feedback = "correct";
    } else {
        feedback = "incorrect";
    }

    results.push([ResponsE, answer1, feedback, time])

    alert(`You answered ${ResponsE} (${feedback}) in ${time} seconds.`);

}

console.log(results)


//}

//let participant = ["Alice", 21, true];

//let participantB = { name: "Alice", age: 21, consent: true }
//participantB.consent = false
//participantB.startTime = "2:00PM";

//if (participant[2]) {
//}
//if (participantB.consent) {

//}
//let person = {
// Strings
// firstName: 'Elliot',
// lastName: 'Brown',

// Number
//age: 30,

// Array
//hobbies: ['reading', 'gaming', 'hiking'],

// Nested Object
// address: {
// street: '324 Western Ave',
//city: 'Cambridge',
//zipCode: '02139'
// },

// Functions
// Observe how the keyword *this* is used in functions to reference other properties within this object
//getFullName: function () {
//return `${this.firstName} ${this.lastName}`;
//},

//greet: function () {
//return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
//},

//getAddress: function () {
//return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
// },

//getHobbies: function () {
//return `My hobbies include ${this.hobbies.join(', ')}`;
//}
////};

//console.log(person.getAddress())

//document.getElementById()
//console.log()








