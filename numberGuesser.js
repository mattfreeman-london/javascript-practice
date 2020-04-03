let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random) * 9
};

let compareGuesses = (human, computer, target) => {
  const userG = Math.abs(target - human);
  const computerG = Math.abs(target - computer);
  return userG <= computerG;
};
