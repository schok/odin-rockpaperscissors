function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection, winStatus) {

    if (computerScore == 5 || playerScore == 5){
        return;
    }

    round++;
    const roundDisplay = document.querySelector('.round');
    roundDisplay.textContent = `Round ${round}`;

    displayMoves(playerSelection, computerSelection);

    const displayComputerScore = document.querySelector('.computerScore');
    const displayPlayerScore = document.querySelector('.playerScore');

    if (playerSelection === computerSelection) {
        winStatus.textContent = "It's a draw!";
        return;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        winStatus.textContent = "Computer wins!";
        displayComputerScore.textContent = `Computer score: ${computerScore}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection == "paper")) {
        playerScore++;
        winStatus.textContent = "Player wins!"
        displayPlayerScore.textContent = `Player score: ${playerScore}`;
    }

    if (computerScore == 5 || playerScore == 5){
        determineWinner();
        winStatus.textContent = "";
        return;
    }

}

function displayMoves(playerSelection, computerSelection) {

    const playerMove = document.querySelector('.playerMove');
    playerMove.textContent = `Player move: ${playerSelection}`;

    const computerMove = document.querySelector('.computerMove');
    computerMove.textContent = `Computer move: ${computerSelection}`;
}

function determineWinner() {
    const outcome = document.querySelector('.outcome');

    if (computerScore == 5) {
        outcome.textContent = "GAME OVER. Try again.";
    } else if (playerScore == 5) {
        outcome.textContent = "You won against the computer! Congratulations!";
    }

    const retry = document.createElement('button');
    retry.textContent = "Retry?";
    retry.addEventListener('click', function() {
        window.location.reload();
    })
    outcome.appendChild(retry);
}

function game(computerSelection) {

    const move = document.querySelector('.move');
    const winStatus = document.createElement('div');
    move.appendChild(winStatus);

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', function () {
        computerSelection = getComputerChoice()
        playRound("rock", computerSelection, winStatus)

    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', function () {
        computerSelection = getComputerChoice()
        playRound("paper", computerSelection, playerScore, computerScore, winStatus)
    });

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', function () {
        computerSelection = getComputerChoice()
        playRound("scissors", computerSelection, playerScore, computerScore, winStatus)
    });

}

let playerScore = 0;
let computerScore = 0;
let round = 1;
const computerSelection = getComputerChoice();
game(computerSelection, playerScore, computerScore);