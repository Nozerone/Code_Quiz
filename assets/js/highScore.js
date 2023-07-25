var goBackEl = document.getElementById("go-back-btn");
var clearHighScoresEL = document.getElementById('clearBtn');
var highScoreHistory = document.createElement('h2');
var myHighScoreEL = document.getElementById('my-high-score');


//Function displays high scores saves in local storage

// function displayHighScore() {
//     var userSubmition =
//       JSON.parse(localStorage.getItem("initials and score")) || [];
//     if (userSubmition.length !== 0) {
//       var element = userSubmition[userSubmition.length - 1];
//       var highScoreItem = document.createElement("p");
//       highScoreItem.textContent = element.initials + " " + element.score;
//       endContainer.appendChild(highScoreItem);
//     } else {
//       var pel = document.createElement("p");
//       pel.innerText = "No high score available";
//       endContainer.appendChild(pel);
//     }
//   }

// goBackEl.addEventListener('click', handleGoBack()), 
//     function handleGoBack() {
//         window.location.href = ".index.html";
    
//     }
// console.log("goback clicked");

// function goBack() {
//     var goBackEl = 'clicked';
//     goBackEl.addEventListener('click',window.location='.index.html');
// }


clearHighScoresEL.addEventListener('click', clearlocalStorage());
console.log("worked");


function clearHighScores() {
    localStorage.clear();
}
  
//display my high score


var myHighScoreEL = document.createElement('my-high-score');
