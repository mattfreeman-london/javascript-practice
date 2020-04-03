// Here's how you convert your age from 'human years' to 'dog years':
// The first two years of a dog's life count as 10.5 dog years each
// Each year following equates to 4 dog years

// set starting age
const myAge = 40;

// set early years variable
let earlyYears = 2;

// as per instructions, first two years of dog life are 10.5 human years
earlyYears *= 10.5;

// to account for the first two years
let laterYears = myAge -2;

// accounting for the rest of the dogs age
laterYears *= 4;

// adding up the total
let myAgeInDogYears = earlyYears + laterYears;
