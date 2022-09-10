function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const returnMessage = [`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`, `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`];

    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(returnMessage[0]);
        return false;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(returnMessage[1]);
        return true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(returnMessage[0]);
        return false;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(returnMessage[1]);
        return true;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(returnMessage[0]);
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(returnMessage[1]);
        return true;
    } else {
        console.log("It's a Tie!");
        return null;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);

        if (round === true) {
            playerScore++;
        } else if (round === false) {
            computerScore++;
        }
    }
    console.log(`Your Score: ${playerScore}\nComputer's Score: ${computerScore}`);
}

game();