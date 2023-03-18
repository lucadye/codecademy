let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
	return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(a, b) {
	return a - b > 0 ? a - b : b - a;
}

function compareGuesses(user, comp, target) {
	user = getAbsoluteDistance(user, target);
	comp = getAbsoluteDistance(comp, target);
	if (comp < user) {
		return false;
	}
	else {
		return true;
	}
}

function updateScore(winner) {
	if (winner === 'human') {
		humanScore++;
	}
	if (winner === 'computer') {
		computerScore++;
	}
}

function advanceRound() {
	currentRoundNumber++;
}