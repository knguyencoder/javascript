const visitorName = prompt("Hi there! May I know your name please?");
alert("Welcome to my website, " + visitorName + "!");

document.getElementById("welcomeName").textContent = visitorName;
console.log("Visitor name set to: " + visitorName);