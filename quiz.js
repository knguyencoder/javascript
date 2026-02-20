"use strict";

const questions = [
  "What is the capital of Texas?",
  "What animal of the year is 2026?",
  "What do you use to write on a whiteboard?"
];

const answers = [
  "austin",
  "horse",
  "marker"
];

function quiz() {
  let totalScore = 0;

  for (let i = 0; i < questions.length; i++) {
    let guesses = 3;
    let correct = false;

    while (guesses > 0 && !correct) {
      let userAnswer = prompt(questions[i]);

      // user cancels => stop attempts for this question and move on
      if (userAnswer === null) {
        guesses = 0;
        break;
      }

      userAnswer = userAnswer.toLowerCase().trim();

      if (userAnswer === answers[i]) {
        // points: 1st try=3, 2nd=2, 3rd=1
        totalScore += guesses;

        alert("Correct!");
        correct = true;
      } else {
        guesses--;
        if (guesses > 0) alert("Wrong! Try again.");
      }
    }
  }

  return totalScore;
}

window.addEventListener("DOMContentLoaded", function () {
  console.log("quiz.js loaded");

  const score = quiz();

  const resultBox = document.getElementById("resultBox");
  const scoreEl = document.getElementById("finalScore");

  console.log("resultBox:", resultBox);
  console.log("finalScore:", scoreEl);

  if (!resultBox || !scoreEl) {
    alert("Missing resultBox or finalScore in quiz.html");
    return;
  }

  resultBox.style.display = "block";
  scoreEl.textContent = "Your final score is: " + score + " points.";
});
