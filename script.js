let score = 0;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");

function randomPosition() {
  const x = Math.random() * 250;
  const y = Math.random() * 250;

  box.style.left = x + "px";
  box.style.top = y + "px";
}

function showBox() {
  randomPosition();
  box.style.display = "block";
}

function hideBox() {
  box.style.display = "none";
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;

  gameLoop();
}

function gameLoop() {
  showBox();

  setTimeout(() => {
    hideBox();
    gameLoop();
  }, 1000);
}

box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  hideBox();
});

