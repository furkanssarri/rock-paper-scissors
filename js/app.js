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

// computerSelection
function computerPlay() {
   return elements[Math.floor(Math.random() * elements.length)];
}

// Play a round of game
function game(e) {
   let attr = e.target.getAttribute("name");
   const playerSelection = attr;
   const computerSelection = computerPlay();
   // const computerSelection = "rock";
   playRound(playerSelection, computerSelection);
}

// Resolve round
function playRound(playerSelection, computerSelection) { // Control the winners. Needs to be re-worked.
   if (computerSelection === "rock" && playerSelection === "scissors"
      || computerSelection === "scissors" && playerSelection === "paper"
      || computerSelection === "paper" && playerSelection === "rock") {
      gameRound++;
      roundStatus("computer", playerSelection, computerSelection);
   } else if (computerSelection === "scissors" && playerSelection === "rock"
      || computerSelection === "paper" && playerSelection === "scissors"
      || computerSelection === "rock" && playerSelection === "paper") {
      gameRound++;
      roundStatus("player", playerSelection, computerSelection);
   } else if (computerSelection === "rock" && playerSelection === "rock"
      || computerSelection === "paper" && playerSelection === "paper"
      || computerSelection === "scissors" && playerSelection === "scissors") {
      gameRound++;
      roundStatus("tie", playerSelection, computerSelection);
   }
   countGame();
}

// Determine round winner and print 
function roundStatus(winner, playerSelection, computerSelection) {
   if (winner === "computer") {
      roundResult.textContent = `YOU LOSE`;
      roundDesc.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
      promptScore("computer");
   } else if (winner === "player") {
      roundResult.textContent = `YOU WIN`
      roundDesc.textContent = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
      promptScore("player");
   } else if (winner === "tie") {
      roundResult.textContent = "IT'S A TIE";
      roundDesc.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} ties with ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
   }
   convertHands(playerSelection, computerSelection);

}

// Prompt the scores
function promptScore(unit) {
   if (unit === "computer") {
      computerScore++;
      computerScoreWrapper.lastElementChild.textContent = computerScore;
   } else if (unit === "player") {
      playerScore++;
      playerScoreWrapper.lastElementChild.textContent = playerScore;
   } else if (unit === "reset") {
      playerScore = 0;
      computerScore = 0;
      computerScoreWrapper.lastElementChild.textContent = computerScore;
      playerScoreWrapper.lastElementChild.textContent = playerScore;
   }
}

// Count and finalize the game
function countGame() {
   let descWrapper = document.querySelector(".desc-wrapper");
   let restartButton = document.createElement("button");
   restartButton.classList = "btn restart-button";
   restartButton.textContent = "Play again";
   let elems = document.getElementsByClassName("game-button");
   if (playerScore == 5 || computerScore == 5) {
      for (let i = 0; i < elems.length; i++) {
         elems[i].disabled = true;
      }
      if (computerScore === 5 && playerScore < 5 ) {
         roundResult.textContent = `GAME OVER`;
         roundDesc.textContent = `Computer is victorious after ${gameRound} rounds.`;
      } else if (playerScore === 5 && computerScore < 5) {
         roundResult.textContent = `GAME OVER`;
         roundDesc.textContent = `Player is victorious after ${gameRound} rounds.`;
      } else {
         roundResult.textContent = `ERROR`;
         roundDesc.textContent = `There has been an error of some sort.`;
      }
      descWrapper.appendChild(restartButton);
      restartButton.addEventListener("click", restartGame);
   }
}

// Restart the game
function restartGame(e) {
   if (e.target.className = "restart-button") {
      gameRound = 0;
      promptScore("reset");
      roundResult.textContent = "Make a selection";
      roundDesc.textContent = "First to score 5 points wins the game";
      let elems = document.getElementsByClassName("game-button");
      for (let i = 0; i < elems.length; i++) {
         elems[i].disabled = false;
      }
      let descWrapper = document.querySelector(".desc-wrapper");
      let restartButton = document.querySelector(".restart-button");
      descWrapper.removeChild(restartButton);
   }
}