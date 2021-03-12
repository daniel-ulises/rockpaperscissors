const playerChoice = document.querySelectorAll(".btn-choice");
const modal = document.querySelector(".modal-outer");
const modalMessage = document.querySelector(".modal-message");
const playAgain = document.querySelector(".play-again");
const playerHand = document.querySelector(".player");
const computerHand = document.querySelector(".computer");
const hands = document.querySelector(".fas");
const message = document.querySelector(".message-content");
const playerScore = document.querySelector(".p-score");
const computerScore = document.querySelector(".c-score");

let pScore = 0,
	cScore = 0;

playerChoice.forEach(button => {
	button.addEventListener("click", () => {
		console.log(pScore, cScore)
		playRound(button.textContent.toLowerCase());
		playerHand.className = "fas fa-hand-rock player player-animation";
		computerHand.className = "fas fa-hand-rock computer computer-animation";

	})
})

function computerChoice() {
	const rps = ["rock", "paper", "scissors"];
	return rps[Math.floor(Math.random() * 3)];
}

function gameOver() {
	if(pScore == 5 || cScore == 5) {
		modal.classList.add("fade-in");
		pScore == 5 ? modalMessage.textContent = "You won... That was luck!" 
					: modalMessage.textContent = "Ha! Better luck next time looser!"
	}
	
	playAgain.addEventListener("click", () => {
		modal.classList.remove("fade-in");
		pScore = 0;
		cScore = 0;
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
		playerHand.className = "fas fa-hand-rock player";
		computerHand.className = "fas fa-hand-rock computer";
	})
	
	// if(pScore == 5) {
	// 	modalMessage.textContent = "You won, congratulations! Press the button to play again!"
	// }

	// if(cScore == 5) {
	// 	modalMessage.textContent = "You lost, better luck next time! Press the button to play again!"
	// }
}

function playRound(choice) {
	hands.addEventListener("animationend", () => {
		playerHand.className = `fas fa-hand-${choice} player`;
		
		switch(computerChoice()) {		
			case "rock": 
				computerHand.className = `fas fa-hand-rock computer`;
				switch(choice) {
					case "rock":
						message.textContent = "It's a tie!";
						break;
					case "paper":
						message.textContent = "You win this round, keep going!";
						pScore++;
						playerScore.textContent = pScore;
						break;
					case "scissors":
						message.textContent = "You lose this round, keep going!";
						cScore++;
						computerScore.textContent = cScore;
						break;
					default:
						return;
				}
				break;
			
			case "paper":
				computerHand.className = `fas fa-hand-paper computer`;
				switch(choice) {
					case "rock":
						message.textContent = "You lose this round, keep going!";
						cScore++;
						computerScore.textContent = cScore;
						break;
					case "paper":
						message.textContent = "It's a tie!";
						break;
					case "scissors":
						message.textContent = "You win this round, keep going!";
						pScore++;
						playerScore.textContent = pScore;
						break;
					default:
						return;
				}
				break;
			
			case "scissors":
				computerHand.className = `fas fa-hand-scissors computer`;
				switch(choice) {
					case "rock":
						message.textContent = "You win this round, keep going!";
						pScore++;
						playerScore.textContent = pScore;
						break;
					case "paper":
						message.textContent = "You lose this round, keep going!";
						cScore++;
						computerScore.textContent = cScore;
						break;
					case "scissors":
						message.textContent = "It's a tie!";
						break;
					default:
						break;
				}
				break;
		}
		gameOver();
	}, {once : true})
}
