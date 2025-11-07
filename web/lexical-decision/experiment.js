let jsPsych = initJsPsych();

let timeline = [];

//welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Lexical Deciision Task</h1>
    <p>You are about to see a series of characters.</p>
    <p>Press F if the characters make up a word. </p>
    <p>Press J if the characters do not make up a word.</p>
    <p> Press SPACE to begin</p>
      `,
    choices: ['']

};



timeline.push(welcomeTrial);

//shuffle the conditions
let conditions = [
    { characters: 'cat', isWord: true },
    { characters: 'pin', isWord: true },
    { characters: 'jgb', isWord: false },
    { characters: 'mub', isWord: false },
];

// Shuffle the conditions
conditions = jsPsych.randomization.repeat(conditions, 1);
console.log(conditions);

for (let condition of conditions) {
    let conditionTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<h1>${conditions.characters}</h1>',

        choices: ['f', 'j']
    }

    timeline.push(conditionTrial);
}

let debriefTrial = {
type: jsPsychHtmlKeyboardResponse,
stimulus: `
            < h1 > Thank you!</h1>
        <p> You can now close this tab</p>
    `,
choices: ['NO KEYS']
on_start: function() {
let data = jsPych.data.get().csv();

}

timeline.push(debriefTrial);



}


jsPsych.run(timeline);



