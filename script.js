

function winnerIs(n){
    if(n == 1) {
        console.log('Player won the round');
    } else if(n == 2) {
        console.log('Computer won this round');
    } else if(n==0){
        console.log('Draw');
    }
}
//let playerSelection = playerChoise();
function playerChoise() {
    return prompt('Enter Rock, Paper or Scissors').toLowerCase();;
}
//const computerSelection = getComputerChoice();

// let x = Math.floor(Math.random() * 3);
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if(x===0) return 'rock';
    else if(x===1) return 'paper';
    else if(x===2) return 'scissors';
}

let pWon = 0;
let cWon = 0;
let draw = 0;
function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player won the round');
        pWon++;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('Player won the round');
        pWon++;

    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('Player won the round');
        pWon++;
    }  else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Computer won the round');
        cWon++;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('Computer won the round');
        cWon++;
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('Computer won the round');
        cWon++;
    } else {
        console.log('Draw');
        draw++;
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = playerChoise();
        const computerSelection = getComputerChoice();
        console.log("Player = ", playerSelection, ', Computer = ', computerSelection);
        playRound(playerSelection, computerSelection);
        console.log('player won ', pWon, ' computer ', cWon, ' Draws ', draw);     
    }
}

game();

