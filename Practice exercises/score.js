var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var h1 = document.querySelector("h1");
var reset = document.getElementsByClassName("reset")[0];
var p1Dis = document.getElementById("p1Dis");
var gameOver = false;
var finalScore = 5;

var p1Score = 0;
var p2Score = 0;

p1.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === finalScore) {
      gameOver = true;
    }
    h1.textContent = p1Score + " to " + p2Score;
  }
});

p2.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === finalScore) {
      gameOver = true;
    }
    h1.textContent = p1Score + " to " + p2Score;
  }
});

reset.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  h1.textContent = p1Score + " to " + p2Score;
  gameOver = false;
});
