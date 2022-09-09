

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const returnMessage = [`You Lose! ${computerSelection} beats ${playerSelection}`, `You Win! ${playerSelection} beats ${computerSelection}`];

    if (playerSelection === "rock" && computerSelection === "paper") {
        return returnMessage[0];
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return returnMessage[1];
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return returnMessage[0];
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return returnMessage[1];
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return returnMessage[0];
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return returnMessage[1];
    } else {
        return "It's a Tie!";
    }
}

const playerSelection = "ROck";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(), computerSelection));