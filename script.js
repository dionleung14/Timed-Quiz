// console.log("connected!");

// Grab start button
var startBtnEl = document.getElementById("startQuiz");

// Add click listener to start button
startBtnEl.addEventListener("click",ticker);

// Start a timer and countdown
// Grab the timer element
var timer = document.querySelector("#timer");

// Grab countdown element
var countdown = document.querySelector("#countdown");

// Countdown ticker
i = 3;
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

var questionsArr = [
    {
        question: `q1`, 
        answers: [
            {
                option: `answer1`,
                result: false
            },
            {
                option: `answer2`,
                result: false
            },
            {
                option: `answer3`,
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
    }
]

// Tracks the index in questions array
var questionTrack = 0;

function displayQuestion(){
    var questionsEl = document.getElementById("questions")
    questionsEl.removeChild(questionsEl.lastChild)
    var currentQuestion = questionsArr[questionTrack];
    var questionDiv = document.createElement("div")
    var questionText = document.createElement("h3")
    questionText.textContent = currentQuestion.question
    questionText.setAttribute("class", "question")
    questionDiv.appendChild(questionText)
    for (var i=0; i<currentQuestion.answers.length;i++) {
        var currentAnswer = currentQuestion.answers[i]
        var answerEl = document.createElement("h5")
        answerEl.setAttribute("class","answer")
        answerEl.setAttribute("result",currentAnswer.result)
        answerEl.textContent = currentAnswer.option
        questionDiv.appendChild(answerEl)
    }
    questionsEl.appendChild(questionDiv)

}



// var q1 = document.getElementById("questionOne")
// var questions1 = document.querySelector(".questions")
// console.log(q1.style)
// console.log(questions1.style)

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


    // q1.setAttribute("display", "block")
    
    }