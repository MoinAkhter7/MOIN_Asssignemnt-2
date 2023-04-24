const submitBtn = document.getElementById("submitBtn");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");

const maxNumber = 100; // Maximum number to guess
let targetNumber = generateRandomNumber(maxNumber); // Number to guess
let guesses = 0; // Number of guesses
let attempt=5; // 10 -5 15 -3
let score=100;

submitBtn.addEventListener("click", checkGuess);

function checkGuess() {
  const guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100!");
    return;
  }

  guesses++;

  if (guess === targetNumber && attempt>0) {
    result.innerText = `Congratulations! You guessed the correct number ${targetNumber} in ${guesses} guesses.  so your Final score is:`+score;
    console.log=("You have "+score);
    submitBtn.disabled = true;
  } else if (guess < targetNumber && attempt>0) {
    result.innerText = "Higher! Guess again.    You have "+attempt+" attempt left!!";
    score=score-3;
    attempt=attempt-1;
    // result.innerText="You have "+attempt+" left!!";
  } else if (guess> targetNumber && attempt>0) {
    result.innerText = "Lower! Guess again. You have "+attempt+" attempt left!!";
    score=score-3;
    attempt=attempt-1;
    // result.innerText="You have "+attempt+" left!!";
  }
    else{
    result.innerText="sorry You have "+attempt+" attempt left!!.    Try again";
}
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
