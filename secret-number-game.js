"use strict";

/*
  Secret Number Game (1-5)
  - Uses conditionals and loops
  - Reprompts if input is not a number
  - Awards 10 points if correct, 0 otherwise
  - Displays result and score on the page
*/

window.addEventListener("DOMContentLoaded", () => {
  // Create a secret number variable (1 to 5)
  const secretNumber = 3; // you can change this to any number from 1-5

  // Prompt the user for a favorite number
  let guessText = prompt("Guess my favorite number (1 to 5):");

  // If user cancels or enters nothing -> game ends with 0 points
  if (guessText === null || guessText.trim() === "") {
    endGame("You did not enter a guess. Game over.", 0);
    return;
  }

  // Convert to number
  let guess = Number(guessText);

  // Loop: keep prompting if input is not a valid number
  while (!Number.isFinite(guess)) {
    guessText = prompt("That was not a number. Please enter a number from 1 to 5:");

    if (guessText === null || guessText.trim() === "") {
      endGame("You did not enter a guess. Game over.", 0);
      return;
    }

    guess = Number(guessText);
  }

  // Compare guess to secretNumber using conditionals
  let points = 0;
  let msg = "";

  if (guess === secretNumber) {
    points = 10;
    msg = `Congratulations! You guessed ${guess}, which matches the secret number.`;
  } else {
    points = 0;
    msg = `Sorry! You guessed ${guess}, but the secret number was ${secretNumber}.`;
  }

  // Display score on the page
  endGame(msg, points);
});

/**
 * Shows end-of-game message and points on the page.
 */
function endGame(message, points) {
  const messageEl = document.getElementById("message");
  const scoreEl = document.getElementById("scoreLine");

  messageEl.textContent = message;

  if (points === 10) {
    scoreEl.textContent = `Great job! You earned ${points} points.`;
  } else {
    scoreEl.textContent = `Thanks for playing! You earned ${points} points.`;
  }
}