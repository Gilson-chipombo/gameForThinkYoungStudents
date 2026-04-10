let score = 0;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.innerHTML = ["🎉", "🎊", "🎈", "⭐", "✨"][Math.floor(Math.random() * 5)];
  confetti.style.left = Math.random() * 100 + "%";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 2000);
}

function celebrate() {
  for (let i = 0; i < 150; i++) {
    setTimeout(createConfetti, i * 50);
  }
}

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
  
  if (score === 1) {
    celebrate();
    alert("🎉 Parabéns! Você chegou em 10 pontos!");
  }
});
