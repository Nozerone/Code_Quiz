var goBackEl = document.getElementById("go-back-btn");
var clearHighScoresEL = document.getElementById("clearBtn");
var myHighScoreEL = document.querySelector(".my-high-score");

//Function displays high scores saves in local storage
var userSubmition = [];
function getLocalStorage() {
  userSubmition = JSON.parse(localStorage.getItem("initials and score")) || [];
  console.log(userSubmition);
}
getLocalStorage();
function displayHighScore() {
  if (userSubmition.length !== 0) {
    for (let i = 0; i < userSubmition.length; i++) {
      var element = userSubmition[i];
      var highScoreItem = document.createElement("p");
      highScoreItem.textContent = element.initials + " " + element.score;
      myHighScoreEL.appendChild(highScoreItem);
    }
  } else {
    var pel = document.createElement("p");
    pel.innerText = "No high score available";
    myHighScoreEL.appendChild(pel);
  }
}
displayHighScore();

function clearHighScores() {
  localStorage.clear();
  userSubmition = [];
  myHighScoreEL.innerText = "No high score available";
}

clearHighScoresEL.addEventListener("click", function () {
  clearHighScores();
});
console.log("worked");
