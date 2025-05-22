// DARK MODE TOGGLE
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("toggle-theme");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// LIVE CLOCK TIMER
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("live-clock").textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// GREETING BASED ON TIME
function setGreeting() {
  const hours = new Date().getHours();
  let greeting = "Hello";

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const welcomeElement = document.querySelector(".welcome-section h2");
  const userName = welcomeElement.querySelector("span").textContent;
  welcomeElement.innerHTML = `${greeting}, <span>${userName}</span>`;
}
setGreeting();

// DISMISS NOTIFICATIONS
document.querySelectorAll(".notification").forEach((note) => {
  const dismissBtn = document.createElement("button");
  dismissBtn.textContent = "×";
  dismissBtn.className = "dismiss-btn";
  dismissBtn.addEventListener("click", () => {
    note.remove();
  });
  note.prepend(dismissBtn);
});
