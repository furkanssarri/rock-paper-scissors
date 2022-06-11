const elements = ["rock", "paper", "scissors"];
// let computerSelection;

function computerPlay() {
   // computerSelection = elements[Math.floor(Math.random() * elements.length)];
   // return computerSelection;
   // console.log(computerSelection);
   // playRound(computerSelection);
   return elements[Math.floor(Math.random() * elements.length)];
}

// console.log(computerSelection);

// computerPlay()

function playRound(playerSelection, computerSelection) {
   if (computerSelection === "rock" && playerSelection === "scissors" 
   || computerSelection === "scissors" && playerSelection === "paper" 
   || computerSelection === "paper" && playerSelection === "rock") {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
   } else if (computerSelection === "scissors" && playerSelection === "rock" 
   || computerSelection === "paper" && playerSelection === "scissors" 
   || computerSelection === "rock" && playerSelection === "paper") {
      console.log(`You won, ${playerSelection} beats ${computerSelection}.`);
   } else if (computerSelection === "rock" && playerSelection === "rock" 
   || computerSelection === "paper" && playerSelection === "paper" 
   || computerSelection === "scissors" && playerSelection === "scissors") {
      console.log(`That's a tie. The computer selected ${computerSelection} and you selected ${playerSelection}.`);
   }
}

const playerSelection = prompt("select");
// const computerSelection = computerPlay();

function game() {
   for (let i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      playRound(playerSelection,computerSelection);
   }
}

game();

// playRound("scissors",computerSelection)