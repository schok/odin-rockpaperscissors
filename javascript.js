
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return -1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return -1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return -1;
    } else {
        return 1;
    }

}

function determineWinner(score) {
    if (score >= 1) {
        alert("You are the winner!");
    } else if (score <= -1) {
        alert("You're the sore loser");
    } else {
        alert("It's a tie!");
    }
}

function game(computerSelection) {
    let score = 0;
    let playerSelection = prompt("Rock, paper, scissors, shoot!");
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        score = result + score;
        console.log(score);
        if (i < 4) {
            computerSelection = getComputerChoice();
            playerSelection = prompt("Rock, paper, scissors, shoot!");
        }
     }
     console.log("The score is" + score);
     determineWinner(score);
}
 
const computerSelection = getComputerChoice();
game();