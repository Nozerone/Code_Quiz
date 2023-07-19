
var containerHighScoresEl = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById(".#correct");
var wrongEl = document.getElementById(".#wrong");
var startingContainer = document.getElementById("starting-container");
var questionsContainer = document.getElementById('quiz-question-container');
var questionStatus = document.getElementById("question-status");
var endContainer = document.getElementById("end-container");
var submitBtnEl = document.getElementById("submit-initials");
var inputEl = document.getElementById("initials");
//testing out individual submition, verify if initials display properly.
var individualSubEl = document.getElementById("individual-sub")

//Quiz elements
var questionEl = document.querySelector(".displayed_Question");
var answerbuttonsEl = document.getElementById("answer-btns");
var timerEl = document.querySelector("#timer");
var timeLeft = 0;
var timer = 0;
var score = 0;
//This var isn't needed
// var quizOver;
timerEl.textContent = timeLeft;


//High Score Array
var highScores = [];

//var assigns array detail for each question

var questionsIndex = 0;
var currentQuestionIndex;



var btnStartEl = document.getElementById("game-start")


//State variables
var rightAnswer = 0;
var wrongAnswer = 0;
var timer = null;
var timeLeft = 0;
var globalIndex = 0;
//Event functions



//Event listeners
function handleClickStart(ev) {
  // Reminder to delete console log
  console.log("Quiz Started");
  setTime();
  questionsContainer.classList.remove("hide");
  startingContainer.style.display = "none";
  showQuestions(globalIndex);
}
btnStartEl.addEventListener("click", handleClickStart,);

//show questions function
function showQuestions(index) {
  // line 63 allows next set of answer buttons to appear, if removed they pile up.
  answerbuttonsEl.innerHTML = " ";
  questionEl.textContent = questionArray[index].q;
  //show answer buttons
  questionArray[index].choices.forEach(element => {

    console.log(element);
    var answerBtn = document.createElement("button");
    answerBtn.textContent = element.choice;
    answerbuttonsEl.appendChild(answerBtn);
    answerBtn.addEventListener("click", function () {
      console.log(answerBtn.textContent);

      if (answerBtn.textContent === questionArray[index].a) {
        console.log("correct");
        //adds 5 seconds to clock.
        timeLeft = timeLeft + 5;
        //adds points to score
        score = score + 4;
        globalIndex++;
        questionStatus.textContent = "correct, 5 seconds added to timer!";

      } else {
        console.log("wrong");
        //Deducts 5 seconds from clock.
        timeLeft = timeLeft - 5;
        score = score;
        globalIndex++;
        questionStatus.textContent = "wrong, 5 seconds deducted from timer!";

      }
      if (questionArray.length > globalIndex) {
        showQuestions(globalIndex);
      } else {
        handleQuizEnd(true);
        //hides clock but does not stop it. goes into negative values.
        timerEl.classList.add("hide");
        questionsContainer.classList.add("hide");
        console.log("Quiz Ended");
        endContainer.classList.remove("hide");
      }

    })

  });
}
//Submit button event listener
submitBtnEl.addEventListener("click", submit);
var userSubmition = [];

//Submit form function
function submit(events) {
  events.preventDefault();
  console.log(inputEl.value, score);
  var userInput = {
    initials: inputEl.value,
    score: score

  }; // stores initials but does not display them.
  userSubmition.push(userInput)
  console.log(userSubmition);


  localStorage.setItem("initials and score", JSON.stringify(userSubmition));
  //test
  userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
  displayHighScore();
}

function getLocalStorage() {
  userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
  console.log(userSubmition);
}
getLocalStorage();


// function displayHighScore() {
//   //test
//   var userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
//   userSubmition.forEach(element => {
//     var highScoreItem = document.createElement("p");
//     //places score element and initial values into highScoreItem el text. However it elements save in local storage, does not display the last submitted value.
//     highScoreItem.textContent = element.initials + " " + element.score;
//     endContainer.appendChild(highScoreItem);

//   });
// }
// displayHighScore();

function displayHighScore() {
  var userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
  if (userSubmition.length !== 0) {
    var element = userSubmition[userSubmition.length - 1]
    var highScoreItem = document.createElement("p");
    highScoreItem.textContent = element.initials + " " + element.score;
    endContainer.appendChild(highScoreItem);
  } else {
    var pel = document.createElement("p")
    pel.innerText = "No high score available"
    endContainer.appendChild(pel)
  }


 }
var setTime = function () {
  timeLeft = 50;
  var timerCheck = setInterval(function () {
    console.log("timer ticked");
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerCheck)
      timerEl.textContent = "Time is up!";
    }
   
  }, 1000);
}

//Timer tick 
function handleTimerTick(ev) {

}

// Event : Quiz Ends
function handleQuizEnd(score) {
  //Hides timer when 0 is reached
  timer <= 0;
  timerEl.classList.add("hide");



}

//Constans, Quiz Questions arrays with answers inside array
var questionArray = [
  {
    q: 'Javascript is an _______ language?',
    a: '4. Object-Oriented',
    choices: [{ choice: '1. Object-Based' }, { choice: '2. Procedural' }, { choice: '3. Constant' }, { choice: '4. Object-Oriented' }]
  },
  {
    q: 'Which function is used to serialize an object into a JSON string in Javascript?',
    a: '3. stringigy()',
    choices: [{ choice: '1. parse()' }, { choice: '2. convert()' }, { choice: '3. stringify()' }, { choice: '4. None of these' }]
  },
  {
    q: 'API stands for:',
    a: '3. Application Programing Interface',
    choices: [{ choice: '1. Application Programming Integration' }, { choice: '2. Application Paradigm Interface' }, { choice: '3. Application Programing Interface' }, { choice: '4. Another Problematic Interface' }]
  },
  {
    q: 'What is the role of an API?',
    a: '4. All of these',
    choices: [{ choice: '1. Define Operations' }, { choice: '2. Accept Requests' }, { choice: '3. Return Responses' }, { choice: '4. All of these' }]
  },
  {
    q: 'What does … operator do in JS?',
    a: '2. Is is used to spread iterable to individual elements',
    choices: [{ choice: '1. It is used to describe a datatype of undefined size' }, { choice: '2. Is is used to spread iterable to individual elements' }, { choice: '3. All of these.' }, { choice: '4. No such operator exists' }]
  },
  {
    q: 'What is the HTTP Status Code Related to Page Not Found?',
    a: '4. 404',
    choices: [{ choice: '201' }, { choice: '302' }, { choice: '808' }, { choice: '404' }]
  },
];
