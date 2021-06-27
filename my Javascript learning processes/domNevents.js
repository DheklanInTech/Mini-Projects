"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 2;

let secretnum = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;

document.querySelector(".check").addEventListener("click", function() {
  //   console.log(document.querySelector(".guess").value);

  const guess = Number(document.querySelector(".guess").value);
  // when there is no guess
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretnum) {
    document.querySelector(".message").textContent = "correct number!";
    document.querySelector(".number").textContent = secretnum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // document.querySelector(".highscore").textContent = 17;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when too low
  } else if (guess < secretnum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number to low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "you have lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // when too high
  } else if (guess > secretnum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "you have lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function() {
  secretnum = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  // document.querySelector(".highscore").textContent = highscore;
  console.log("clicked");
});

// .......................................................
// hoisting in javascript;
// ..........................................................
// cons;

// var me = "jonas";
// let job = "programmer";
// const year = 1993;
