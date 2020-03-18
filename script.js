var rightAnswers = 0;
var wrongAnswers = 0;
var storedScores = [];
var storedNames = [];

// Contains all the questions, answers, and their results
var questionsArr = [
    {
        question: `For a given fighting type pokemon that endures a move with 1HP remaining, then uses a salac berry, what is the most likely move to be used in the next turn?`, 
        answers: [
            {
                option: `Submission`,
                result: false
            },
            {
                option: `Cross Chop`,
                result: false
            },
            {
                option: `Reversal`,
                result: true
            }
        ]
    },
    {
        question: `q2`, 
        answers: [
            {
                option: `answer1`,
                result: true
            },
            {
                option: `answer2`,
                result: false
            },
            {
                option: `answer3`,
                result: false
            }
        ]
    },
    // {
    //     question: `q3`, 
    //     answers: [
    //         {
    //             option: `answer1`,
    //             result: true
    //         },
    //         {
    //             option: `answer2`,
    //             result: false
    //         },
    //         {
    //             option: `answer3`,
    //             result: false
    //         }
    //     ]
    // },
    // {
    //     question: `q4`, 
    //     answers: [
    //         {
    //             option: `answer1`,
    //             result: true
    //         },
    //         {
    //             option: `answer2`,
    //             result: false
    //         },
    //         {
    //             option: `answer3`,
    //             result: false
    //         }
    //     ]
    // },
    // {
    //     question: `q5`, 
    //     answers: [
    //         {
    //             option: `answer1`,
    //             result: true
    //         },
    //         {
    //             option: `answer2`,
    //             result: false
    //         },
    //         {
    //             option: `answer3`,
    //             result: false
    //         }
    //     ]
    // }
]

// Grab start button
var startBtnEl = document.getElementById("startQuiz");

// Grab the timer element
var timer = document.querySelector("#timer");

// Grab countdown element
var countdown = document.querySelector("#countdown");

// Grab a reference to heading h1
var headerEl = document.querySelector("#heading")

// Grab a reference to description h3
var descriptionEl = document.querySelector("#description")

// Grab a reference to timekeeping h1
var timerEl = document.querySelector("#timer")

// Grab a reference to scoring div
var scoringEl = document.querySelector("#scoring")

// Provides and tracks the index in questions array
var questionTrack = 0;

// Grab reference to questions div element
var questionsEl = document.getElementById("questions")

// Create time remaining variable
var timeRemaining = 1000;

// Add click listener to start button to start ticker function
startBtnEl.addEventListener("click",ticker);


// This function is a countdown ticker to countdown prior to quiz
function ticker() {
    console.log("clicked ticker")
    var i = 1;
    var x = setInterval(function() { 
        if (i >= 1) {
            countdown.textContent = i;
            i--;
        } else {
            // gameOver();
            clearInterval(x);
            quizTimer();
            displayQuestion();
        }
    }, 1000)
}

// This function rewrites content on page using questions stored in questionsArr
function displayQuestion(){
    // Clears div of any text content
    questionsEl.removeChild(questionsEl.lastChild)
    // Assigns variable to questions array based on question progress
    var currentQuestion = questionsArr[questionTrack];
    // Creates a div for the question and its answer choices
    var questionDiv = document.createElement("div")
    // Creates an h3 element for the question text (question itself)
    var questionText = document.createElement("h3")
    // Fills in question h3 with stored question
    questionText.textContent = currentQuestion.question
    // Assigns the question h3 a class of .question
    questionText.setAttribute("class", "question")
    // Appends the question to the question div
    questionDiv.appendChild(questionText)

    // Loops over the length of answer choices and 
    // fills in choice options with stored answer text
    for (var i=0; i<currentQuestion.answers.length;i++) {
        // Local variable that identifies the current answer text based on the question
        var currentAnswer = currentQuestion.answers[i]
        // Creates h5 tag for each answer text
        var answerEl = document.createElement("h5")
        // Assigns a class of .answer to each h5
        answerEl.setAttribute("class","answer")
        // Assigns a result attribute of boolean data type to indicate right/wrong
        answerEl.setAttribute("result",currentAnswer.result)
        // Adds an event listener for clicks on the answers, fires answer checker function
        answerEl.addEventListener("click",answerChecker)
        // Fills in the answer h5 with the stored text
        answerEl.textContent = currentAnswer.option
        // Appends the answer to the question div
        questionDiv.appendChild(answerEl)
    }
    // Appends the question and answer choices to the question div
    questionsEl.appendChild(questionDiv)
}

// This function checks whether the user got the question correct or not
function answerChecker(event){
    var check = event.target.getAttribute("result");
    var resultEl = document.querySelector("#result")
    if (check==="true") {
        rightAnswers++;
        resultEl.textContent = "Correct!"
        gameOver();
    } else {
        wrongAnswers++;
        resultEl.textContent = "Sorry, that was incorrect."
        gameOver();
    }
    // After clicking, increment questionTrack
    questionTrack++;
    // Call displayQuestion to populate the next question
    displayQuestion();
}

// This function will check for end game conditions
// (timer timeRemaining = 0 and if there are no more questions)
// Also brings up score element
function gameOver(){
    if (timeRemaining==0 || questionTrack==(questionsArr.length-1)) {
        highScores();
    }
}


// This function runs at the end of the game and computes score
function highScores(){
    // Clears divs of any text content
    questionsEl.removeChild(questionsEl.lastChild)
    headerEl.removeChild(headerEl.lastChild)
    descriptionEl.removeChild(descriptionEl.lastChild)
    timerEl.removeChild(timerEl.lastChild)
    timerEl.removeChild(timerEl.lastChild)
    
    // timerEl.removeChild(timerEl.children)

    // Create high scores form
        // Create new heading 
        headerEl.textContent = "Your Score"
        
        // Create score field and calculation
        var userScore = document.createElement("h5");
        userScore.setAttribute("id", "finalScore")
        var scoreMultiplier = 1;
        if (rightAnswers === questionsArr.length) {
            scoreMultiplier = 15;
        } else if (wrongAnswers === questionsArr.length) {
            scoreMultiplier = 0.05;
        } else {
            scoreMultiplier = rightAnswers/wrongAnswers
        }
        // Store final score in a variable
        var finalScore = Math.floor(scoreMultiplier*timeRemaining)
        // Push final score into user score
        userScore.textContent = finalScore
        // Append user score into header as an h5
        headerEl.appendChild(userScore)

        // Call scoreForm function to write score and initials to Local Storage
        scoreForm()

    // Create button to play again
    var replayBtn = document.createElement("button")
    replayBtn.setAttribute("id", "replay")
    replayBtn.textContent = "Play again?"
    replayBtn.addEventListener("click", restart)
    scoringEl.appendChild(replayBtn)
}

function restart(){
    headerEl
}

// This function writes the form to submit user score and initials to local storage
function scoreForm() {
    // Create a form for submitting score
        // Create form
        var scores = document.createElement("form")
        // Set id of form to scoresForm
        scores.setAttribute("id", "scoresForm")
        // Append form to scores div
        scoringEl.appendChild(scores)
        //Create input field
        var inputField = document.createElement("input")
        // Set type of input to text
        inputField.setAttribute("type", "text")
        // Set id of input to userScoreSubmission
        inputField.setAttribute("id", "userScoreSubmission")
        // Append input to form
        document.getElementById("scoresForm").appendChild(inputField)
        // Create submit button
        var submitBtn = document.createElement("button")
        // Set id of button to submitScore
        submitBtn.setAttribute("id", "submitScore")
        // Add text to submit button
        submitBtn.textContent = "Submit score"
        // Add event listener to button
        submitBtn.addEventListener("click", submission)
          // Append button to form
        document.getElementById("scoresForm").appendChild(submitBtn)

}

function submission(event){
    event.preventDefault();

    var userInitialsInput = document.getElementById("userScoreSubmission")
    var initialsText = userInitialsInput.value.trim();
    
    // Check if initials are empty
    if (initialsText == "") {
        return;
    }
    // Add initials text to storedNames array, clear input
    storedNames.push(initialsText);
    userInitialsInput.value = "";
    // Add score to storedScores array
    var finalScoreEl = document.getElementById("finalScore")
    var finalScore = parseInt(finalScoreEl.textContent)
    storedScores.push(finalScore);

    saveScores();
    inLS();
    renderScores();

//   When the user initials are submitted
    // var userInitialsInput = document.getElementById("userScoreSubmission")

    //     // Store updated scores in local storage and refresh list
    //     saveScores();
    //     refreshScores();
    // })
}

function inLS() {
    var savedNames = JSON.parse(localStorage.getItem("Name"));
    var savedScores = JSON.parse(localStorage.getItem("Score"));

    if (storedNames !== null) {
        storedNames = savedNames;
    }

    if (storedScores !== null) {
        storedScores = savedScores;
    }

    renderScores();
}

function renderScores() {
    console.log("rendered Scores is called")
    // userInitialsInput.innerHTML = "";
}


function saveScores(){
    // Stringify and set the name in local storage
    localStorage.setItem("Name", JSON.stringify(storedNames))
    // Stringify and set the score in local storage
    localStorage.setItem("Score", JSON.stringify(storedScores))
}




// Starts timer for quiz
function quizTimer() {
    startBtnEl.setAttribute("display", "none")
    var y = setInterval (function() {
        if (timeRemaining >= 0) {
            countdown.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(y);
            alert("time's up")
        }
        }, 1000
    )
}