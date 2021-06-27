"use strict";
// selecting elements.......
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
let currentScore0El = document.getElementById("current--0");
let currentScore1El = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let imgdice = document.querySelector(".dice");
let playerActive = document.querySelector(".player--active");
let winner = document.querySelector(".player--winner");

const switchplayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// seting variables
let scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let gameOn = true;

btnRoll.addEventListener("click", function() {
  if (gameOn) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    imgdice.classList.remove("hidden");
    imgdice.src = `imagePick/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener("click", function() {
  if (gameOn) {
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      gameOn = false;
      imgdice.classList.add("hidden");
    } else {
      switchplayer();
    }
  }
});

btnNew.addEventListener("click", function() {
  gameOn = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  player0.classList.add("player--active");
});
