const gameBox = document.getElementById("game-box");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");
const instructions = document.getElementById("instructions");

let startTime;
let timeout;

// Start the game when the page loads
function startGame() {
  instructions.textContent = "Wait for the box to turn green...";
  result.textContent = "";
  gameBox.style.backgroundColor = "red";
  gameBox.style.display = "block";
  resetButton.style.display = "none";

  // Set a random time for the box to turn green
  const randomDelay = Math.random() * 3000 + 2000; // Between 2 and 5 seconds
  timeout = setTimeout(() => {
    gameBox.style.backgroundColor = "green";
    startTime = Date.now();
  }, randomDelay);
}

// Handle box clicks
gameBox.addEventListener("click", () => {
  if (gameBox.style.backgroundColor === "green") {
    // Calculate reaction time
    const reactionTime = Date.now() - startTime;
    result.textContent = `Your reaction time is ${reactionTime} ms!`;
    resetButton.style.display = "inline-block";
  } else if (gameBox.style.backgroundColor === "red") {
    // Clicked too early
    clearTimeout(timeout);
    result.textContent = "Too soon! Wait for green.";
    resetButton.style.display = "inline-block";
  }
});

// Reset the game
resetButton.addEventListener("click", () => {
  startGame();
});

// Start the game when the page loads
startGame();
