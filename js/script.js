const choice = ['rock', 'paper', 'scissors']

// console.log(playRound(playerSelection, computerSelection))

function game() {
	const player = prompt('Your turn')
	const playerSelection = player.toLowerCase()
	const getComputerChoice = () => {
		return choice[Math.floor(Math.random() * 3)]
	}
	const computerSelection = getComputerChoice()
	
	const playRound = (playerSelection, computerSelection) => {
		if (
			(playerSelection == 'rock' && computerSelection == 'rock') ||
			(playerSelection == 'scissors' && computerSelection == 'scissors') ||
			(playerSelection == 'paper' && computerSelection == 'paper')
		) {
			return 'Draw! Play again'
		} else if (playerSelection == 'paper' && computerSelection == 'rock') {
			return 'You Win! Paper beats Rock'
		} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
			return 'You Lose! Scissors beats paper!'
		} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
			return 'You Lose! Rock beats Scissors'
		} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
			return 'You Win! Scissors beats paper'
		} else if (playerSelection == 'rock' && computerSelection == 'paper') {
			return 'You Lose! Paper beats Rock'
		} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
			return 'You Win! Rock beats Scissors'
		} else {
			return 'You write wrong text'
		}
	}

	playRound(playerSelection, computerSelection)
	console.log(playRound(playerSelection, computerSelection))
}

let n = 0
while (n < 5) {
	game()
	n++
}
