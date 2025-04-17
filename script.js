// Get references to the buttons
const techBtn = document.getElementById("techBtn");
const nonTechBtn = document.getElementById("nonTechBtn");

// Redirect to respective pages when buttons are clicked
techBtn.addEventListener("click", () => {
  window.location.href = "technical.html";
});

nonTechBtn.addEventListener("click", () => {
  window.location.href = "non-technical.html";
});
