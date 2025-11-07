let jsPsych = initJsPsych();
let timeline = [];

let welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1>
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press <span class="key">SPACE</span> to begin</p>
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

for (let i = 0; i < mathTrials.length; i++) {
    let trial = mathTrials[i];

    let mathResponse = {
        type: jsPsychSurveyHtmlForm,
        html: `<p>What is ${trial.num1} + ${trial.num2}?</p>
        <p><input name="answer" type="number" required></p>`,
        button_label: 'Submit Answer',
        data: {
            num1: trial.num1,
            num2: trial.num2,
            correctAnswer: trial.correctAnswer,
        },
        on_finish: function (data) {
            let answer = Number(data.response.answer);
            let correct = (answer == data.correctAnswer);
            data.correct = correct;
            data.rt = data.response.rt;
        }
    };
    timeline.push(mathResponse);
}

/*let wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) + 1;
var trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: <p> What is ${trial.num1} + ${trial.num2} ? </p>,
    choices: [correctAnswer, wrongAnswer],
    prompt: <p> Click the correct answer. </p>,
}
*/

let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function (d) {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version'])
            .csv();
        console.log();
        console.log(jsPsych.data.get().values());
    }
};
timeline.push(debriefTrial);


jsPsych.run(timeline);


