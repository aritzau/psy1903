// Define the word pool - ideally 20+ words for flexibility
let wordPool = [
    "apple", "table", "ocean", "cloud", "chair", "house", "banana", "garden",
    "lemon", "door", "window", "flower", "train", "biscuit", "zipper",
    "tree", "pencil", "pillow", "street", "camera"
];

// Always the same target
let targetWord = "ocean";

// 5 trials at each cloud size (1, 5, 10)
let experimentConditions = [
    { cloudSize: 1 }, { cloudSize: 1 }, { cloudSize: 1 }, { cloudSize: 1 }, { cloudSize: 1 },
    { cloudSize: 5 }, { cloudSize: 5 }, { cloudSize: 5 }, { cloudSize: 5 }, { cloudSize: 5 },
    { cloudSize: 10 }, { cloudSize: 10 }, { cloudSize: 10 }, { cloudSize: 10 }, { cloudSize: 10 }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


