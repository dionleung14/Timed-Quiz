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
        question: `In generations 4 and later, what move is best suited to dispatch an enemy Aggron if ignoring STAB?`, 
        answers: [
            {
                option: `Earthquake`,
                result: true
            },
            {
                option: `Surf`,
                result: false
            },
            {
                option: `Close Combat`,
                result: false
            }
        ]
    },
    {
        question: `How does Gloom evolve into Bellossom?`, 
        answers: [
            {
                option: `Level up with high friendship during the day`,
                result: false
            },
            {
                option: `Trade while holding a Sun Stone`,
                result: false
            },
            {
                option: `Using a Sun Stone`,
                result: true
            }
        ]
    },
    {
        question: `Which of the following Pokemon do NOT have an Alolan form?`, 
        answers: [
            {
                option: `Sandshrew`,
                result: false
            },
            {
                option: `Gastly`,
                result: true
            },
            {
                option: `Diglett`,
                result: false
            }
        ]
    },
    {
        question: `In generation 3, which badge gives the player character the ability to control Pokemon level 50 and below?`, 
        answers: [
            {
                option: `Heat Badge`,
                result: true
            },
            {
                option: `Feather Badge`,
                result: false
            },
            {
                option: `Knuckle Badge`,
                result: false
            }
        ]
    }
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

// This function resets everything for a new game
function reset(){
    rightAnswers = 0;
    wrongAnswers = 0;
    timeRemaining = 1000;
    questionTrack = 0;
}

// This function is a countdown ticker prior to quiz starting
function ticker() {
    // 3 seconds before quiz starts (variable i)
    var i = 3;
    var preQuizCountdown = setInterval(function() { 
        if (i >= 1) {
            countdown.textContent = i;
            i--;
        } else {
            // gameOverCheck();
            clearInterval(preQuizCountdown);
            startBtnEl.style.display = "none";
            quizStart();
            displayQuestion();
        }
    }, 1000)
}

// This function rewrites content on page using questions stored in questionsArr
function displayQuestion(){
    // Clears div of any text content unless empty
    if (questionsEl.children.length) {
        questionsEl.removeChild(questionsEl.lastChild)
    }
    // Assigns variable to questions array based on question progress
    var currentQuestion = questionsArr[questionTrack];
    // Creates a div for the question and its answer choices
    var questionDiv = document.createElement("div")
    // Creates an h3 element for the question text (question itself)
    var questionText = document.createElement("h3")
    // Fills in question h3 with stored question
    // if (!currentQuestion) {
        questionText.textContent = currentQuestion.question
        // Assigns the question h3 a class of .question
        questionText.setAttribute("class", "question")
        // Appends the question to the question div
        questionDiv.appendChild(questionText)
    // } else {
    //     gameOverCheck();
    // }

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
    // Assigns variable check to the answer clicked
    var check = event.target.getAttribute("result");
    // Grabs a reference to the empty h5 with id of #result
    var resultEl = document.querySelector("#result")
    if (check==="true") {
        rightAnswers++;
        resultEl.textContent = "Correct!"
        gameOverCheck();
    } else {
        wrongAnswers++;
        resultEl.textContent = "Sorry, that was incorrect."
        gameOverCheck();
    }
    // After clicking an answer, increment questionTrack
    questionTrack++;
    // Call displayQuestion to populate the next question
    displayQuestion();
}

// This function will check for end game conditions
// (timer timeRemaining = 0 or if there are no more questions)
// Also brings up score element
function gameOverCheck(){
    if (timeRemaining==0 || questionTrack==(questionsArr.length-1)) {
        highScores();
    }
}


// This function runs at the end of the game and computes score
function highScores(){
    // Clears divs of any text content
    questionsEl.removeChild(questionsEl.lastChild)
    headerEl.removeChild(headerEl.lastChild)
    timerEl.removeChild(timerEl.lastChild)
    
    // timerEl.removeChild(timerEl.children)

    // Create high scores form
        // Create new heading 
        headerEl.textContent = "Your Score"
        
        // Create score field and calculation
        var userScore = document.createElement("h5");
        // Creates attribute of id for #finalScore
        userScore.setAttribute("id", "finalScore")
        var scoreMultiplier = 1;
        // if user got all questions right
        if (rightAnswers === questionsArr.length) {
            scoreMultiplier = 15;
        }
        // if user got all questions wrong
        else if (wrongAnswers === questionsArr.length) {
            scoreMultiplier = 0.05;
        }
        // If user ended up with non-zero right and wrong answers 
        else {
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
    reset();
    var headerText = document.querySelector("#heading")
    var resultEl = document.querySelector("#result")
    var scoreFormEl = document.querySelector("#scoring")
    ticker();
    headerText.textContent = "Quiz Time: Replay"
    resultEl.textContent = "";
    scoreFormEl.style.visibility = "hidden";
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

// This function runs on click of submitting a name and score
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

    var scoreEntry = {
        name: initialsText,
        score: finalScore
    }

    saveScores(scoreEntry);
    inLS();
    renderScores();
}

// This function checks local storage for any saved names and scores
// then displays (renders) them
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

// This function displays scores saved in local storage
function renderScores() {
    console.log("rendered Scores is called")
    // userInitialsInput.innerHTML = "";
}

// This function saves scores to local storage
function saveScores(scoreObject){
    var pullScores = JSON.parse(localStorage.getItem("highScores"))
    if (pullScores && pullScores.length) {
        pullScores.push(scoreObject)
        localStorage.setItem("highScores", JSON.stringify(pullScores))
    } else {
        var firstScore = [scoreObject];
        localStorage.setItem("highScores", JSON.stringify(firstScore))
    }
}

// Starts timer for quiz
function quizStart() {
    reset();
    descriptionEl.textContent = "";
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