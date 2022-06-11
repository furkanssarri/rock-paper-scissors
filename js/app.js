const elements = ["rock", "paper", "scissors"];
// let computerSelection;

// Let the computer select a random element from the elements array
function computerPlay() { 
   return elements[Math.floor(Math.random() * elements.length)];
}


// Play one round of the game
function playRound(playerSelection, computerSelection) { // Control the winners. Needs to be re-worked.
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





function game() {
   for (let i = 0; i < 5; i++) { // Loop for 5 rounds of game
      const playerSelection = prompt("select"); // Initialize the player selection for each round
      const computerSelection = computerPlay(); // Initialize the computer selection for each round
      playRound(playerSelection,computerSelection); // Play the game for 5 rounds
   }
}

game();

// playRound("scissors",computerSelection)