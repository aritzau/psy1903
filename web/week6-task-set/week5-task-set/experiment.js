/*
let jsPsych = initJsPsych();
let timeline = [];

let welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1> <span class="instructions">Welcome to the Math Response Time Task!</h1>
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press <span class="key">SPACE</span> to begin.</p>
    `,
    choices: [' ']

};
timeline.push(welcome)



let mathTrials = [];
for (let i = 0; i < 3; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2;
    mathTrials.push({ num1, num2, correctAnswer });
};

*/

let mathScale = {
    type: jsPsychSurveyLikert,
    questions: [
        {
            prompt: "I enjoy solving math problems .",
            labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree"
            ],
        },
        {
            prompt: "I find math easy .",
            labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree"
            ]
        }
    ]
};

timeline.push(mathScale)







