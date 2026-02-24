"use strict";

const questions = [
  "What is the capital of Texas?",
  "What do bees make",
  "What do you use to write on a whiteboard?"
];

const answers = [
  "austin",
  "honey",
  "marker"
];

const quotes = [
  "Jeremiah 29:11: For I know well the plans I have in mind for you... plans for your welfare and not for woe, so as to give you a future of hope.",
  "Philippians 4:13: I have the strength for everything through him who empowers me.",
  "Proverbs 3:5: Trust in the LORD with all your heart, on your own intelligence do not rely.",
  "Matthew 11:28: Come to me, all you who labor and are burdened, and I will give you rest.",
  "Joshua 1:9: Be strong and steadfast! Do not fear nor be dismayed, for the LORD, your God, is with you wherever you go."
];

/* ===== Date (user friendly) ===== */
function showFriendlyDate() {
  const now = new Date();

  // date methods (2+): getDay, getMonth, getDate, getFullYear, getHours, getMinutes
  const dayIndex = now.getDay();
  const monthIndex = now.getMonth();
  const dateNum = now.getDate();
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = now.getMinutes();

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;

  const min2 = String(minutes).padStart(2, "0");

  const friendly = `Today is ${days[dayIndex]}, ${months[monthIndex]} ${dateNum}, ${year}. It is ${hours}:${min2} ${ampm}.`;
  const el = document.getElementById("friendlyDate");
  if (el) el.textContent = friendly;

  return now;
}

/* ===== Greeting (switch) ===== */
function getGreetingByTime(dateObj) {
  const hour = dateObj.getHours();

  let timeLabel = "";
  if (hour >= 5 && hour < 12) timeLabel = "morning";
  else if (hour >= 12 && hour < 17) timeLabel = "afternoon";
  else timeLabel = "evening";

  let greeting = "";
  switch (timeLabel) {
    case "morning":
      greeting = "Good Morning";
      break;
    case "afternoon":
      greeting = "Good Afternoon";
      break;
    default:
      greeting = "Good Evening";
  }
  return greeting;
}

function capitalizeFirstLetter(text) {
  const cleaned = (text || "").trim();
  if (cleaned.length === 0) return "Friend";
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

/* ===== Email (regex validate + split + uppercase username) ===== */
function askForValidEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let email = prompt("Please enter your email address:");
  while (email === null || !emailRegex.test(email.trim())) {
    alert("Invalid email. Please try again (example: name@example.com).");
    email = prompt("Please enter your email address:");
  }

  email = email.trim();
  const [user, domain] = email.split("@");

  const userEl = document.getElementById("emailUser");
  const domainEl = document.getElementById("emailDomain");

  if (userEl) userEl.textContent = user.toUpperCase();
  if (domainEl) domainEl.textContent = domain;
}

/* ===== Quote random 0-4 ===== */
function showRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length); // 0..4
  const el = document.getElementById("quoteText");
  if (el) el.textContent = `"${quotes[index]}"`;
}

/* ===== Quiz (for + while + if) ===== */
function quiz() {
  let totalScore = 0;

  for (let i = 0; i < questions.length; i++) {
    let guesses = 3;
    let correct = false;

    while (guesses > 0 && !correct) {
      let userAnswer = prompt(questions[i]);

      if (userAnswer === null) {
        guesses = 0;
        break;
      }

      userAnswer = userAnswer.toLowerCase().trim();

      if (userAnswer === answers[i]) {
        totalScore += guesses; // 3,2,1
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

/* ===== Main ===== */
window.addEventListener("DOMContentLoaded", function () {
  // 1) Date before quiz
  const now = showFriendlyDate();

  // 2) Greeting + name before quiz
  const nameInput = prompt("What is your name?");
  const name = capitalizeFirstLetter(nameInput);
  const greeting = getGreetingByTime(now);
  const greetEl = document.getElementById("greetingLine");
  if (greetEl) greetEl.textContent = `${greeting}, ${name}!`;

  // 3) Email before quiz
  askForValidEmail();

  // 4) Quote before quiz
  showRandomQuote();

  // 5) Run quiz
  const score = quiz();

  // 6) Show score + percent
  const totalPossible = 9;
  const percent = (score / totalPossible) * 100;

  const resultBox = document.getElementById("resultBox");
  const scoreEl = document.getElementById("finalScore");
  const percentEl = document.getElementById("percentLine");

  if (resultBox) resultBox.style.display = "block";
  if (scoreEl) scoreEl.textContent = `Your final score is: ${score} / ${totalPossible} points.`;
  if (percentEl) percentEl.textContent = `Percentage: ${percent.toFixed(2)}%`;
});