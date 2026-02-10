/* 
  Week 4 Lab - Quote of the Day
  - Arrays
  - prompt(), alert()
  - modulus (%)
  - push(), shift()
  - Write results to the page
*/

// 1) Array of 5 quotes
const quotes = [
  "Jeremiah 29:11: For I know well the plans I have in mind for you... plans for your welfare and not for woe, so as to give you a future of hope.",
  "Philippians 4:13: I have the strength for everything through him who empowers me.",
  "Proverbs 3:5: Trust in the LORD with all your heart, on your own intelligence do not rely.",
  "Matthew 11:28: Come to me, all you who labor and are burdened, and I will give you rest.",
  "Joshua 1:9: Be strong and steadfast! Do not fear nor be dismayed, for the LORD, your God, is with you wherever you go."
];

// 2) Prompt user for a number
let userInput = prompt("Enter a number (any number):");

// Convert to number (handle empty / invalid)
let userNumber = Number(userInput);
if (!Number.isFinite(userNumber)) {
  userNumber = 0; // default if user cancels or types text
}

// 3) Modulus to pick quote index
const index = userNumber % 5;

// Write quote to page
const quoteTextEl = document.getElementById("quoteText");
const quoteMetaEl = document.getElementById("quoteMeta");

quoteTextEl.textContent = quotes[index];
quoteMetaEl.textContent = `You entered: ${userNumber} → ${userNumber} % 5 = ${index}`;

// Optional alert (not required but OK)
alert(`Welcome! Your Quote of the Day is:\n\n"${quotes[index]}"`);

// 4) Array of 3 favorite website URLs
const websites = [
  "https://www.microsoft.com/ai",
  "https://www.dallascollege.edu/",
  "https://www.w3schools.com/"
];

// Helper: render links into a UL
function renderLinks(list, ulId) {
  const ul = document.getElementById(ulId);
  ul.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = list[i];
    a.textContent = list[i];
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.appendChild(a);
    ul.appendChild(li);
  }
}

// Write original list
renderLinks(websites, "sitesList");

// 5) Prompt user for their favorite website and add to end (push)
let newSite = prompt("Enter your favorite website URL (include https://):");

// Basic cleanup
if (newSite) {
  newSite = newSite.trim();
}

// If user typed something but forgot https, auto-fix (still acceptable)
if (newSite && !newSite.startsWith("http://") && !newSite.startsWith("https://")) {
  newSite = "https://" + newSite;
}

if (newSite) {
  websites.push(newSite);
}

// 6) Delete the first website (shift)
websites.shift();

// Write updated list
renderLinks(websites, "sitesListUpdated");
