console.log("Begin of JS");

//variables
var highScoreEl = document.getElementById("view-high-scores");
// highScoreEl.setAttribute("style", "color: blue");
var displaySeconds = document.getElementById("seconds");
var startBtn = document.getElementById("start-button");
var mainEl = document.getElementById("main-section");

var currentQuestionIndex = 0;
var totalSeconds = 60;
var interval;

var arrayOfQuestions = [
    {
        question: "Question 1",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
        correctAnswer: 1,
    },
    {
        question: "Question 2",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
        correctAnswer: 1,
    },
    {
        question: "Question 3",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
        correctAnswer: 1,
    },
    {
        question: "Question 4",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
        correctAnswer: 1,
    },
    {
        question: "Question 5",
        answer1: "Answer 1",
        answer2: "Answer 2",
        answer3: "Answer 3",
        answer4: "Answer 4",
    },
];



// Define functions
function startQuiz() {
    console.log("1st Question");
    mainEl.innerHTML = "";
    var currentQuestion = arrayOfQuestions[currentQuestionIndex];
    var displayedQuestion = document.createElement("h2");
    displayedQuestion.textContent = currentQuestion.question;
    mainEl.append(displayedQuestion);
    var answerList = document.createElement("ul");
    mainEl.append(answerList);
    var answerItem1 = document.createElement("li");
    answerItem1.textContent = currentQuestion.answer1;
    answerList.append(answerItem1);
    var answerItem2 = document.createElement("li");
    answerItem2.textContent = currentQuestion.answer2;
    answerList.append(answerItem2);
    var answerItem3 = document.createElement("li");
    answerItem3.textContent = currentQuestion.answer3;
    answerList.append(answerItem3);
    var answerItem4 = document.createElement("li");
    answerItem4.textContent = currentQuestion.answer4;
    answerList.append(answerItem4);
    console.log(currentQuestion.correctAnswer);


    // var answerOne = document.createElement("button");
    // answerOne.textContent = currentQuestion.answer1;
    // mainEl.append(answerOne);
    // var answerTwo = document.createElement("button");
    // answerTwo.textContent = currentQuestion.answer2;
    // mainEl.append(answerTwo);
    // var answerThree = document.createElement("button");
    // answerThree.textContent = currentQuestion.answer3;
    // mainEl.append(answerThree);
    // var answerFour = document.createElement("button");
    // answerFour.textContent = currentQuestion.answer4;
    // mainEl.append(answerFour);
    





}





// Function Calls

// startQuiz();


// Event Listeners
startBtn.addEventListener("click", startQuiz)