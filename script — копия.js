let pWon = 0;
let cWon = 0;
let draw = 0;
const divResults = document.querySelector(".results");
const btns = document.querySelectorAll(".btn");

// function removeChosen() {
//   if (Array.from(btns).includes(".chosen")) {
//     console.log(Array.from(btns));
//     btns[i].classList.remove("chosen");
//   }
// }
let playerSelection = function playerChoise() {
  let choise = "";

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      btns[i].classList.add("chosen");
      choise = btns[i].textContent;
      console.log(choise);
      // console.log(choise.toLowerCase());
    });
  }
  // for (let i = 0; i < btns.length; i++) {
  //   if (btns[i].classList.contains("chosen")) {
  //     console.log(btns[i]);
  //     choise = btns[i].textContent;
  //     // btns[i].classList.remove("chosen");
  //   }
  // }

  console.log(choise);
};

let computerSelection = function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) return "rock";
  else if (x === 1) return "paper";
  else if (x === 2) return "scissors";
  return x;
};
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  // if (playerSelection === "rock" && computerSelection === "scissors") {
  //   console.log("Player won the round");
  //   divResults.textContent = "Player won the round";
  //   pWon++;
  // } else if (playerSelection === "scissors" && computerSelection === "paper") {
  //   console.log("Player won the round");
  //   divResults.textContent = "Player won the round";
  //   pWon++;
  // } else if (playerSelection === "paper" && computerSelection === "rock") {
  //   console.log("Player won the round");
  //   divResults.textContent = "Player won the round";
  //   pWon++;
  // } else if (playerSelection === "scissors" && computerSelection === "rock") {
  //   console.log("Computer won the round");
  //   divResults.textContent = "Computer won this round";
  //   cWon++;
  // } else if (playerSelection === "paper" && computerSelection === "scissors") {
  //   console.log("Computer won the round");
  //   divResults.textContent = "Computer won this round";
  //   cWon++;
  // } else if (playerSelection === "rock" && computerSelection === "paper") {
  //   console.log("Computer won the round");
  //   divResults.textContent = "Computer won this round";
  //   cWon++;
  // } else {
  //   console.log("Draw");
  //   divResults.textContent = "It's a draw";
  //   draw++;
  // }
}
// btns.addEventListener("click");
// let playerSelection = playerChoise();
// let computerSelection = getComputerChoice();

// let playerSelection = playerChoise();
// let computerSelection = getComputerChoice();
// btns.addEventListener("click", playRound(playerSelection, computerSelection));
// btns.addEventListener("click", function () {
//   let chosen;
//   for (let btn of Array.from(btns)) {
//     if (btn.getAttribute(".chosen")) return (chosen = btn.textContent);
//   }
//   console.log(chosen);
// });
//   btns.forEach((button) => {
//     console.log(`button.getAttribute('id')`);
//     return btns.getAttribute("id");
//   });
//   return prompt("Enter Rock, Paper or Scissors").toLowerCase();
// }

// function winnerIs(n) {
//   if (n == 1) {
//     console.log("Player won the round");
//     divResults.textContent = "Player won the round";
//   } else if (n == 2) {
//     console.log("Computer won this round");
//     divResults.textContent = "Computer won this round";
//   } else if (n == 0) {
//     console.log("Draw");
//     divResults.textContent = "It's a draw";
//   }
// }
//let playerSelection = playerChoise();
// function playerChoise() {
//   btns.forEach((button) => {
//     console.log(`button.getAttribute('id')`);
//     return btns.getAttribute("id");
//   });
//   return prompt("Enter Rock, Paper or Scissors").toLowerCase();
// }
//const computerSelection = getComputerChoice();

// let x = Math.floor(Math.random() * 3);

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === "rock" && computerSelection === "scissors") {
//     console.log("Player won the round");
//     divResults.textContent = "Player won the round";
//     pWon++;
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     console.log("Player won the round");
//     divResults.textContent = "Player won the round";
//     pWon++;
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     console.log("Player won the round");
//     divResults.textContent = "Player won the round";
//     pWon++;
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     console.log("Computer won the round");
//     divResults.textContent = "Computer won this round";
//     cWon++;
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     console.log("Computer won the round");
//     divResults.textContent = "Computer won this round";
//     cWon++;
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     console.log("Computer won the round");
//     divResults.textContent = "Computer won this round";
//     cWon++;
//   } else {
//     console.log("Draw");
//     divResults.textContent = "It's a draw";
//     draw++;
//   }
// }

// function game() {
//   for (let i = 0; i < 2; i++) {
//     let playerSelection = playerChoise();
//     let computerSelection = getComputerChoice();
//     console.log(
//       "Player = ",
//       playerSelection,
//       ", Computer = ",
//       computerSelection
//     );
//     playRound(playerSelection, computerSelection);
//     console.log("player won ", pWon, " computer ", cWon, " Draws ", draw);
//   }
// }

// game();
