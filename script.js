// Grab start button
var startBtnEl = document.getElementById("startQuiz");

// Add click listener to start button to start ticker function
startBtnEl.addEventListener("click",ticker);

// Start a timer and countdown for quiz preparedness
    // Grab the timer element
    var timer = document.querySelector("#timer");

    // Grab countdown element
    var countdown = document.querySelector("#countdown");

    // Countdown ticker
    i = 2;
    function ticker() {
        var x = setInterval(function() { 
            if (i >= 1) {
                countdown.textContent = i;
                // console.log(i);
                i--;
            } else {
                // console.log("pass");
                clearInterval(x);
                quizFunction();
            }
        }, 1000)
    }

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
    {
        question: `q3`, 
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
    {
        question: `q4`, 
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
    {
        question: `q5`, 
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
    }
]

// Tracks the index in questions array
var questionTrack = 0;

// Rewrites content on page using questions stored in array
function displayQuestion(){
    // Grab reference to questions div element
    var questionsEl = document.getElementById("questions")
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
        // Fills in the answer h5 with the stored text
        answerEl.textContent = currentAnswer.option
        // Appends the answer to the question div
        questionDiv.appendChild(answerEl)
    }
    // Appends the question and answer choices to the question div
    questionsEl.appendChild(questionDiv)

    var answerChoiceEl = document.querySelectorAll(".answer");
    answerChoiceEl.forEach(function(){
        addEventListener("click",function(event){
            questionTrack++;
            displayQuestion();
            // console.log(event.target);
        })
    })
    
    // answerChoiceEl.forEach(function(){
    //     console.log("clicked")
    // })

    // answerChoiceEl.forEach(console.log)
    // console.log(answerChoiceEl)


    // choices()
}

// Starts timer for quiz
j = 1000;
function quizFunction() {
    var y = setInterval (function() {
        if (j >= 0) {
            countdown.textContent = j;
            j--;
        } else {
            clearInterval(y);
            alert("time's up")
        }
        }, 1000
    )
    displayQuestion()   
}

// function choices(){
//     while (questionTrack === 0){
//     }
// }

// var answerChoiceEl = document.querySelectorAll(".answer");
//     answerChoiceEl.addEventListener("click", function(event) {
//         console.log("clicked");
//     })