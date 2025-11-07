let jsPsych = initJsPsych({
    show_progress_bar: true
});

let timeline = [];





// welcome page'

let welcome_Page = {

    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h2 class="experiment-heading">Welcome to the Distractor Load and Cognitive Processing Speed in Visual Search Task!</h2>

    <p> The experiment you are about to complete is an educational exercise designed for PSY 1903: Programming for Psychological Scientists; it is not intended as a true scientific experiment.
    <p> No identifying information will be collected, data will not be shared beyond our class, and your participation is completely voluntary.
    <p> If you have any questions, please reach out to Annabella Ritzau (aritzau@college.harvard.edu), one of the researchers.
    <p> If you agree to participate, press <span class= 'key'> SPACE</span> to begin. </p> 
`,
    choices: [' ']

}

timeline.push(welcome_Page);

let instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h2 class="experiment-heading">Instructions</h2>
    <p>In this experiment, you will see a series of "word clouds" appear on the screen. Each word cloud contains a selection of words displayed in the same font and size.<br>
    <p>Your task is to find and click on the target word. This will always be the same throughout the experiment. The target word will be provided at the top of the screen so you can refer to it during each trial.</p>
    <p>Each word cloud may vary in the number of words it contains.</p>
    <p>The location of the target word within the word cloud will change each time.</p>
    <p>Your goal:Find and click the target word as quickly and as accurately as possible in each word cloud.</p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
`,
    choices: [' ']


}
timeline.push(instructions);

experimentConditions = shuffleNoConsecutiveRepeats(experimentConditions, "cloudSize");



//random cloudsize for each trial
shuffleArray(experimentConditions);

//Create the distractor pool (all words except targetWord)
// Make a new array with all words BUT "ocean"—used for picking distractors

let distractorPool = [];
for (let i = 0; i < wordPool.length; i++) {
    if (wordPool[i] !== "ocean") { // If this word is NOT "ocean"...
        distractorPool.push(wordPool[i]); // ...add it to the list of distractors
    }
}

let fixation_button_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Place your mouse at the center and click the + to start the next trial.</p>',
    choices: ['+'],
    target: '+'
};

//used AI for this portion, this is calculating the position of the buttons. with the intention of creating 15 fixed positions that are all equal distance from the center

// --- 1. Circle positions ---
const N_POSITIONS = 15;
const RADIUS = 250;
const CENTER_X = 512; // Set to half your display width, or tune as needed
const CENTER_Y = 384; // Set to half your display height, or tune as needed

const circlePositions = [];
for (let i = 0; i < N_POSITIONS; i++) {
    const angle = (2 * Math.PI / N_POSITIONS) * i - Math.PI / 2; // 0 is top
    circlePositions.push({
        left: CENTER_X + RADIUS * Math.cos(angle),
        top: CENTER_Y + RADIUS * Math.sin(angle)
    });
}

function getButtonPositionStyles(n_buttons) {
    // Randomly sample unique positions for this trial
    const positions = jsPsych.randomization.sampleWithoutReplacement(circlePositions, n_buttons);
    // Return array of style strings for each button
    return positions.map(pos =>
        `position:absolute; left:${pos.left}px; top:${pos.top}px; transform:translate(-50%, -50%);`
    );
}


// all our trial word clouds
let all_trials = [];

// For EVERY trial we build...
for (let i = 0; i < experimentConditions.length; i++) {
    let thisCond = experimentConditions[i]; // Get this trial's condition (cloudSize)
    let cloud = ["ocean"]; // Start each word cloud with only "ocean" (the target)

    //add random distractors until we reach the correct total size
    let usedDistractors = []; // Keep track of distractors we've added for this cloud
    while (cloud.length < thisCond.cloudSize) { // Until cloud is big enough
        shuffleArray(distractorPool);
        let word = distractorPool[0]; // Pick a random distractor word
        if (usedDistractors.indexOf(word) === -1) { // If we haven't added this word yet...
            cloud.push(word); // Add it to this word cloud
            usedDistractors.push(word); // Keep track, to avoid duplicates
        }
    }

    shuffleArray(cloud); //so that target word isn't always first


    for (let j = 0; j < cloud.length; j++) {
        if (j < cloud.length / 2) { // i used /2 because i was not sure how to split the colour assignment in half, at first i was playing around with 0.5 but i was not successful, i asked to chat to guide me and i realized i could re-write 0.5 as /2.
            cloud[j] =
                `<span style="color:red;">${cloud[j]}</span>`;
        } else {
            cloud[j] =
                `<span style="color:blue;">${cloud[j]}</span>`;
        }
    }
    //the usage of ${cloud [j]} from what i understood is that we asking javascript to treat ${cloud[j]} like a placeholder and put the real word from the cloud inside the string and make it either red or blue.

    // Record this trial setup so we can use it later
    all_trials.push({
        cloudSize: thisCond.cloudSize, // How many words are in the cloud
        target: "ocean", // The target word (always "ocean")
        wordCloud: cloud // The shuffled array of words to show
    });
}









for (let i = 0; i < all_trials.length; i++) {
    if (i > 0) timeline.push(fixation_button_trial);

    timeline.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>Find the word: <b>ocean</b></p>`,
        choices: all_trials[i].wordCloud,
        data: {
            condition: all_trials[i].cloudSize,
            target: 'ocean',
            wordCloud: all_trials[i].wordCloud,
            collect: true
        },
        on_finish: function (data) {
            const response = data.response;
            if (response !== null && all_trials[i].wordCloud[response] === 'ocean') {
                data.correct = true;
            } else {
                data.correct = false;
            }
        }
    });
}


//save results
let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO_KEYS'],
    stimulus: `
        

        <h1>Please wait...</h1>
        <span class="loader"></span>
        <p>We are saving the results of your inputs.</p>
        `,
    on_start: function () {


        let prefix = 'Visual Search Task';
        let dataPipeExperimentId = '1zUcUB5aZKRZ';
        let forceOSFSave = true;


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




console.log(all_trials);

let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1> Thank you!</h1>
    <p>This study looked at how the number of words in a word cloud affects how quickly people can find a target word. Your responses will help us learn about attention and distraction.</p>
    <p>This kind of research helps psychologists learn how people filter out irrelevant information when searching for something specific, which is important for understanding attentional processes in everyday life.</p>
    <p>All of your answers will be kept confidential.</p>
    <p>Thank you again for your time and contribution.</p>
    <p>You can now close this tab.</p>
`,
    choices: "NO_KEYS",
    on_start: function () {
        jsPsych.progressBar.progress = 1;
    }
};


timeline.push(debriefTrial);


jsPsych.run(timeline);









