const elements = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
let computerScoreWrapper = document.querySelector(".computer-score");
let playerScoreWrapper = document.querySelector(".player-score");
let roundResult = document.querySelector("#roundResult");
let roundDesc = document.querySelector("#roundDesc");
let computerHand = document.querySelector(".computer-selection");
let playerHand = document.querySelector(".player-selection");


buttonsArr = [...buttons];
let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

eventListeners();


function eventListeners() {
   buttonsArr.forEach(button => {
      button.addEventListener("click", game);
   });
}


// Let the computer select a random element from the elements array
function computerPlay() {
   return elements[Math.floor(Math.random() * elements.length)];
}


// Play one round of the game
function playRound(playerSelection, computerSelection) { // Control the winners. Needs to be re-worked.
   if (computerSelection === "rock" && playerSelection === "scissors"
      || computerSelection === "scissors" && playerSelection === "paper"
      || computerSelection === "paper" && playerSelection === "rock") {
      console.log(`playRound -> Computer Selection: ${computerSelection}`);
      console.log(`playRound -> Player Selection: ${playerSelection}`);
      gameRound++; // TO BE MERGED
      getHand(playerSelection, computerSelection); // TO BE MERGED
      roundWinner("computer"); // TO BE MERGED
      roundStatus(playerSelection, computerSelection); // TO BE MERGED
      winLose("computer", playerSelection, computerSelection); // TO BE MERGED
      // console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
   } else if (computerSelection === "scissors" && playerSelection === "rock"
      || computerSelection === "paper" && playerSelection === "scissors"
      || computerSelection === "rock" && playerSelection === "paper") {
      console.log(`playRound -> Computer Selection: ${computerSelection}`);
      console.log(`playRound -> Player Selection: ${playerSelection}`);
      gameRound++; // TO BE MERGED
      getHand(playerSelection, computerSelection); // TO BE MERGED
      roundWinner("player"); // TO BE MERGED
      roundStatus(playerSelection, computerSelection); // TO BE MERGED
      winLose("player", playerSelection, computerSelection) // TO BE MERGED
      // console.log(`You won, ${playerSelection} beats ${computerSelection}.`);
   } else if (computerSelection === "rock" && playerSelection === "rock"
      || computerSelection === "paper" && playerSelection === "paper"
      || computerSelection === "scissors" && playerSelection === "scissors") {
      gameRound++;
      // console.log(`That's a tie. The computer selected ${computerSelection} and you selected ${playerSelection}.`);
      getHand(playerSelection, computerSelection); // TO BE MERGED
      roundStatus(playerSelection, computerSelection); // TO BE MERGED
      winLose("tie", playerSelection, computerSelection); // TO BE MERGED
   }
}

// Play a round of game

function game(e, computerScore, playerScore) {
   let attr = e.target.getAttribute("name");
   const playerSelection = attr;
   const computerSelection = computerPlay();
   // const computerSelection = "rock";
   playRound(playerSelection, computerSelection);

}

// Determine round winner and print / TO BE MERGED

function roundWinner(unit) {
   if (unit === "computer") {
      computerScore++;
      computerScoreWrapper.lastElementChild.textContent = computerScore;
   } else if (unit === "player") {
      playerScore++;
      playerScoreWrapper.lastElementChild.textContent = playerScore;
   }
}

// TO BE MERGED

function roundStatus(winner, loser) {
   if (computerScore !== playerScore) {
      // console.log(`${winner} wins over ${loser}`);
   } else {
      console.log(`Tie`);
   }
   // console.log(gameRound);
}

// Print the game status and description / TO BE MERGED
function winLose(winner, playerSelection, computerSelection) {
   if (winner === "computer") {
      roundResult.textContent = `YOU LOSE`;
      roundDesc.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
      console.log(`winLose -> Computer Selection: ${computerSelection}`);
      console.log(`winLose -> Player Selection: ${playerSelection}`);
   } else if (winner === "player") {
      roundResult.textContent = "YOU WIN"
      roundDesc.textContent = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
      console.log(`winLose -> Computer Selection: ${computerSelection}`);
      console.log(`winLose -> Player Selection: ${playerSelection}`);
   } else if (winner === "tie") {
      roundResult.textContent = "IT'S A TIE";
      roundDesc.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} ties with ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
   }
}

function convertHands(playerSelection, computerSelection) {
   let rock = "✊"
   paper = "✋"
   scissors = "✌️";
   switch (playerSelection) {
      case "rock":
         playerHand.textContent = rock;
         break;
      case "paper":
         playerHand.textContent = paper;
         break;
      case "scissors":
         playerHand.textContent = scissors;
         break;
   }
   switch (computerSelection) {
      case "rock":
         computerHand.textContent = rock;
         break;
      case "paper":
         computerHand.textContent = paper;
         break;
      case "scissors":
         computerHand.textContent = scissors;
         break;
   }
   
}



function getHand(playerSelection, computerSelection) {
   // Display each unit's hand
   convertHands(playerSelection, computerSelection);
}



