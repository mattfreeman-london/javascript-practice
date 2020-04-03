let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random) * 9
};

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  if Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)
    return true;
} else {
    return false;
};
