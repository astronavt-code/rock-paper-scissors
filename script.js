const divResults = document.querySelector(".results");
const winnerMessage = document.querySelector(".winner-message");
const btns = document.querySelectorAll(".btn");
const playerCount = document.querySelector(".player-count");
const compCount = document.querySelector(".comp-count");
const draws = document.querySelector(".draws");
const resetGame = document.querySelector(".reset-game");
let cWon = 0;
let pWon = 0;
let draw = 0; // variables for count, maybe make it as array

let computerChoise = function () {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) return "rock";
  else if (x === 1) return "paper";
  else if (x === 2) return "scissors";
  console.log(x);
  return x;
};
resetGame.addEventListener("click", () => {
  pWon = 0;
  cWon = 0;
  draw = 0;
  compCount.textContent = cWon;
  playerCount.textContent = pWon;
  draws.textContent = draw;
  winnerMessage.textContent = "Play the Game ";
  winnerMessage.classList.remove("won");
});
// get players choise - return textContent from clicked button
let playerChoise;
let roundsCount = 0;

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    playerChoise = btn.textContent.toLowerCase();
    playRound(playerChoise, computerChoise());
  })
);

function playRound(playerSelection, computerSelection) {
  if (cWon === 5) {
    winnerMessage.classList.add("won");
    winnerMessage.textContent = "Computer won the game";
  } else if (pWon === 5) {
    winnerMessage.classList.add("won");
    winnerMessage.textContent = "Player won the game";
  } else if (pWon < 5 && cWon < 5) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      // console.log("Player won the round");
      winnerMessage.textContent = "Player won the round";
      pWon++;
      playerCount.textContent = pWon;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      // console.log("Player won the round");
      winnerMessage.textContent = "Player won the round";
      pWon++;
      playerCount.textContent = pWon;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      // console.log("Player won the round");
      winnerMessage.textContent = "Player won the round";
      pWon++;
      playerCount.textContent = pWon;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      // console.log("Computer won the round");
      winnerMessage.textContent = "Computer won this round";
      cWon++;
      compCount.textContent = cWon;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      // console.log("Computer won the round");
      winnerMessage.textContent = "Computer won this round";
      cWon++;
      compCount.textContent = cWon;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      // console.log("Computer won the round");
      winnerMessage.textContent = "Computer won this round";
      cWon++;
      compCount.textContent = cWon;
    } else {
      // console.log("Draw");
      winnerMessage.textContent = "It's a draw";
      draw++;
      draws.textContent = draw;
    }
  }

  // console.log(`playerSelection = ${playerSelection},
  // computerSelection = ${computerSelection}`);
}

function removeChosen() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      btns[i].classList.remove(".chosen");
    });
  }
}
