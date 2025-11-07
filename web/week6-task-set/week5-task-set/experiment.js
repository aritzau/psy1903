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
    ],
    data: { collect: true }//ask ai because i had no way of attaining my data
};

timeline.push(mathScale)





for (let i = 0; i < mathTrials.length; i++) {
    let trial = mathTrials[i];

    let mathResponse = {
        type: jsPsychSurveyHtmlForm,
        html: `<p> <span class="equation">What is <span class="num1">${trial.num1}</span>+ <span class="num2">${trial.num2}</span>?</p>

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



let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: `
        <h1>Please wait...</h1>
        <p>We are saving the results of your inputs.</p>
        `,
    on_start: function () {

        let prefix = 'Visual Search Task';
        let dataPipeExperimentId = 'y';
        let forceOSFSave = false;


        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();


        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');


        let isLocalHost = window.location.href.includes('localhost');

        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }

        // Send the results to our saving end point
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId,
                filename: prefix + '-' + participantId + '.csv',
                data: results,
            }),
        }).then(data => {
            console.log(data);
            jsPsych.finishTrial();
        })
    }
}
timeline.push(resultsTrial);





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
            .ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version'])
            .csv();
        console.log();
        console.log(jsPsych.data.get().values());
    }
};
timeline.push(debriefTrial);


jsPsych.run(timeline);






