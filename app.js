const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('.results');
const computerScore = document.querySelector('#comp-score');
const playerScore = document.querySelector('#play-score');

const results = document.createElement('h1');
results.classList.add('result');
container.appendChild(results);

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
})

let computerStartingScore = 0;
let playerStartingScore = 0;

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const returnMessage = [`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`, `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`];
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = returnMessage[0];
        computerScore.textContent = computerStartingScore++;
        return false;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = returnMessage[1];
        playerScore.textContent = playerStartingScore++;
        return true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = returnMessage[0];
        computerScore.textContent = computerStartingScore++;
        return false;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = returnMessage[1];
        playerScore.textContent = playerStartingScore++;
        return true;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = returnMessage[0];
        computerScore.textContent = computerStartingScore++;
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = returnMessage[1];
        playerScore.textContent = playerStartingScore++;
        return true;
    } else {
        results.textContent = "It's a Tie!";
        return null;
    }
}
