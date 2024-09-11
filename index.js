const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter your choice between rock, paper, scissor");
        choice = choice.toLowerCase();
    } while (!options.includes(choice));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw! " + humanChoice + " is equal to " + computerChoice);
    } else {
        if (humanChoice === options[0]) {
            if (computerChoice === options[2]) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore++;
            }
        } else if (humanChoice === options[1]) {
            if (computerChoice === options[0]) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore++;
            }
        } else if (humanChoice === options[2]) {
            if (computerChoice === options[1]) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore++;
            }
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("You won the game");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game");
    } else {
        console.log("It's a draw");
    }
}

playGame();