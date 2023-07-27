var containerHighScoresEl = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById(".#correct");
var wrongEl = document.getElementById(".#wrong");
var startingContainer = document.getElementById("starting-container");
var questionsContainer = document.getElementById("quiz-question-container");
var questionStatus = document.getElementById("question-status");
var endContainer = document.getElementById("end-container");
var submitBtnEl = document.getElementById("submit-initials");
var inputEl = document.getElementById("initials");
//testing out individual submition, verify if initials display properly.
var individualSubEl = document.getElementById("individual-sub");

//Quiz elements
var questionEl = document.querySelector(".displayed_Question");
var answerbuttonsEl = document.getElementById("answer-btns");
var timerEl = document.querySelector("#timer");
var timeLeft = 0;
var timer = 0;
var score = 0;
timerEl.textContent = timeLeft;

//High Score Array
var highScores = [];

//var assigns array detail for each question

var questionsIndex = 0;
var currentQuestionIndex;

var btnStartEl = document.getElementById("game-start");

//State variables
var rightAnswer = 0;
var wrongAnswer = 0;
var timer = null;
var timeLeft = 0;
var globalIndex = 0;

//Event listeners
function handleClickStart(ev) {
  setTime();
  questionsContainer.classList.remove("hide");
  startingContainer.style.display = "none";
  showQuestions(globalIndex);
}
btnStartEl.addEventListener("click", handleClickStart);

//show questions function
function showQuestions(index) {
  answerbuttonsEl.innerHTML = " ";
  questionEl.textContent = questionArray[index].q;
  //show answer buttons
  questionArray[index].choices.forEach((element) => {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = element.choice;
    answerbuttonsEl.appendChild(answerBtn);
    answerBtn.addEventListener("click", function () {
      if (answerBtn.textContent === questionArray[index].a) {
        //adds 5 seconds to clock.
        timeLeft = timeLeft + 5;
        //adds points to score
        score = score + 4;
        globalIndex++;
        questionStatus.textContent = "Correct!";
      } else {
        //Deducts 5 seconds from clock.
        timeLeft = timeLeft - 5;
        score = score;
        globalIndex++;
        questionStatus.textContent = "Wrong!";
      }
      if (questionArray.length > globalIndex) {
        showQuestions(globalIndex);
      } else {
        handleQuizEnd(true);
        //hides clock but does not stop it. goes into negative values.
        timerEl.classList.add("hide");
        questionsContainer.classList.add("hide");

        endContainer.classList.remove("hide");
      }
    });
  });
}
//Submit button event listener
submitBtnEl.addEventListener("click", submit);
var userSubmition = [];

//Submit form function
function submit(events) {
  events.preventDefault();

  var userInput = {
    initials: inputEl.value,
    score: score,
  };
  userSubmition.push(userInput);

  localStorage.setItem("initials and score", JSON.stringify(userSubmition));
  //test
  userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
  //displayHighScore();
  inputEl.value = "";
  alert("your info has been saved");
}

function getLocalStorage() {
  userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
}
getLocalStorage();

function displayHighScore() {
  var userSubmition =
    JSON.parse(localStorage.getItem("initials and score")) || [];
  if (userSubmition.length !== 0) {
    var element = userSubmition[userSubmition.length - 1];
    var highScoreItem = document.createElement("p");
    highScoreItem.textContent = element.initials + " " + element.score;
    endContainer.appendChild(highScoreItem);
  } else {
    var pel = document.createElement("p");
    pel.innerText = "No high score available";
    endContainer.appendChild(pel);
  }
}
var setTime = function () {
  timeLeft = 50;
  var timerCheck = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerCheck);
      timerEl.textContent = "Time is up!";
    }
  }, 1000);
};

//Timer tick
function handleTimerTick(ev) {}

// Event : Quiz Ends
function handleQuizEnd(score) {
  //Hides timer when 0 is reached
  timer <= 0;
  timerEl.classList.add("hide");
}

//Constans, Quiz Questions arrays with answers inside array
var questionArray = [
  {
    q: "Javascript is an _______ language?",
    a: "4. Object-Oriented",
    choices: [
      { choice: "1. Object-Based" },
      { choice: "2. Procedural" },
      { choice: "3. Constant" },
      { choice: "4. Object-Oriented" },
    ],
  },
  {
    q: "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "3. stringigy()",
    choices: [
      { choice: "1. parse()" },
      { choice: "2. convert()" },
      { choice: "3. stringify()" },
      { choice: "4. None of these" },
    ],
  },
  {
    q: "API stands for:",
    a: "3. Application Programing Interface",
    choices: [
      { choice: "1. Application Programming Integration" },
      { choice: "2. Application Paradigm Interface" },
      { choice: "3. Application Programing Interface" },
      { choice: "4. Another Problematic Interface" },
    ],
  },
  {
    q: "What is the role of an API?",
    a: "4. All of these",
    choices: [
      { choice: "1. Define Operations" },
      { choice: "2. Accept Requests" },
      { choice: "3. Return Responses" },
      { choice: "4. All of these" },
    ],
  },
  {
    q: "What does … operator do in JS?",
    a: "2. Is is used to spread iterable to individual elements",
    choices: [
      { choice: "1. It is used to describe a datatype of undefined size" },
      { choice: "2. Is is used to spread iterable to individual elements" },
      { choice: "3. All of these." },
      { choice: "4. No such operator exists" },
    ],
  },
  {
    q: "What is the HTTP Status Code Related to Page Not Found?",
    a: "4. 404",
    choices: [
      { choice: "201" },
      { choice: "302" },
      { choice: "808" },
      { choice: "404" },
    ],
  },
];
