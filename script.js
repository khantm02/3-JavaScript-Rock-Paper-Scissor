"use strict";

/*
1) Select player, computer and result display for DOM manipulation
2) Create choices array to randomly generate for computer 
3) Function to play game 
  - generate computer choice randomly
  -compare computer and player choice and update result display accordingly
    -game logic
4) Player and Computer Score
  -state variables for each and update them accordingly
*/

const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".resultDisplay");
const background = document.querySelector("body");
const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function upperCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function playGame(playerChoice) {
  resultDisplay.classList.remove("greenText", "redText");
  const computerChoice = choices[Math.trunc(Math.random() * 3)];
  console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    result = `You win! ${upperCase(playerChoice)} beats ${upperCase(
      computerChoice
    )}`;
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else {
    result = `You lose! ${upperCase(computerChoice)} beats ${upperCase(
      playerChoice
    )}`;
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  playerDisplay.textContent = `PLAYER: ${upperCase(playerChoice)}`;
  computerDisplay.textContent = `COMPUTER: ${upperCase(computerChoice)}`;
  resultDisplay.textContent = result;
}
