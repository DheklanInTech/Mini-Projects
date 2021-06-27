"use strict";
let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let dispalyMessage = function(message) {
  document.querySelector(".message").textContent = message;
};
let displayscore = function(score) {
  document.querySelector(".score").textContent = score;
};

// document.querySelector(".number").textContent = secretnum;

document.querySelector(".check").addEventListener("click", function() {
  const gess = Number(document.querySelector(".gess").value);
  //   console.log(gess);

  if (!gess) {
    dispalyMessage("No Number!");
  } else if (gess === secretnum) {
    dispalyMessage("Correct Number!");
    document.querySelector(".number").textContent = secretnum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (gess !== secretnum) {
    if (score > 1) {
      dispalyMessage(gess > secretnum ? "Too High!" : "Too Low");
      score--;
      displayscore(score);
    } else {
      dispalyMessage("You have lost the game!");
      displayscore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function() {
  secretnum = Math.trunc(Math.random() * 20) + 1;

  dispalyMessage("Start guessing...");
  displayscore(20);
  document.querySelector(".gess").value = " ";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});
