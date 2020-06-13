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
        answerArray: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswer: 1,
    },
    {
        question: "Question 2",
        answerArray: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswer: 1,
    },
    {
        question: "Question 3",
        answerArray: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswer: 1,
    },
    {
        question: "Question 4",
        answerArray: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswer: 1,
    },
    {
        question: "Question 5",
        answerArray: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswer: 1,
    },
];



questionNumber = 0;
// Define functions
function startQuiz() {

    console.log("Start Timer and Create 1st Question");
    //Start Timer
    // Clear Div
    mainEl.innerHTML = "";

    // Create element h2 and textContent Question
    var questionEl = document.createElement("h2");
    var answerList = document.createElement("ul");

    questionEl.textContent = arrayOfQuestions[questionNumber].question;
    mainEl.append(questionEl);
    mainEl.append(answerList);
    for (var i = 0; i < arrayOfQuestions[questionNumber].answerArray.length; i++) {
        var answerEl = document.createElement("li");
        answerEl.textContent = arrayOfQuestions[questionNumber].answerArray[i];
        answerEl.setAttribute("data-index", i);
        answerList.append(answerEl);



        



    }
    // Var for question number
    // Create Elements for Answers and textContent each
    // Add event listener to capture button clicked
    // if button clicked === answer 
      // Display correct 
      // increment question number
      //  startQuiz
      // else
        // Display Wrong
        // Increment Quesiton number
        // subract 10 seconds
        // startQuiz


        
    
}

startBtn.addEventListener("click", startQuiz)
mainEl.addEventListener("click", function(event) {
    var element = event.target;
    if(element.matches("li") === true) {
        var index = element.ParentElement.getAttribute("data-index");
        console.log("data-index");
    }

});






    // var currentQuestion = arrayOfQuestions[currentQuestionIndex];
    // var displayedQuestion = document.createElement("h2");
    // displayedQuestion.textContent = currentQuestion.question;
    // mainEl.append(displayedQuestion);
    // var answerList = document.createElement("ul");
    // answerList.setAttribute("style", "list-style-type: none")
    // mainEl.append(answerList);
    // var answerItem1 = document.createElement("li"); 
    // answerItem1.textContent = currentQuestion.answer1;
    // answerList.append(answerItem1);
    // var answerItem2 = document.createElement("li");
    // answerItem2.textContent = currentQuestion.answer2;
    // answerList.append(answerItem2);
    // var answerItem3 = document.createElement("li");
    // answerItem3.textContent = currentQuestion.answer3;
    // answerList.append(answerItem3);
    // var answerItem4 = document.createElement("li");
    // answerItem4.textContent = currentQuestion.answer4;
    // answerList.append(answerItem4);
    // console.log(currentQuestion.correctAnswer);


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
    











// Function Calls

// startQuiz();


// Event Listeners
