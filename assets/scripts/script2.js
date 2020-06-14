console.log("JS is linked");

// Variables
    var startBtn = document.getElementById("start-button");

    // Variable for Questions Objects
    var arrayOfQuestions = [
        {
            question: "Commonly used datatypes do not include:",
            answerArray: ["strings", "booleans", "alerts", "numbers"],
            correctAnswer: 2,
        },
        {
            question: "The condition included in an if/else statement is enclosed with _________.",
            answerArray: ["quotes", "curly braces", "parentheses", "square brackets"],
            correctAnswer: 2,
        },
        {
            question: "Arrays in JavaScript can be used to store _________.",
            answerArray: ["numbers and strings", "otehr arrays", "booleans", "all of the above"],
            correctAnswer: 3,
        },
        {
            question: "String values must be enclosed within ________ to be assigned to variables.",
            answerArray: ["commas", "curly brackets", "quotes", "parantheses"],
            correctAnswer: 2,
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is ____________.",
            answerArray: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            correctAnswer: 3,
        },
    ];
    // Variable for current question
    var currentQuestion = 0;
    // Variable for timer
    var timerEl = document.getElementById("timer");




// Functions




// Function Calls



// Event Listeners
startBtn.addEventListener("click", function() {
    console.log("Start Button Clicked");
})
