'use strict';
import './theme.js';

// DEFINE THE SECRET NUMBER - It must be defined only one time.
let secretNumber: number = Math.trunc(Math.random() * 20) + 1;
let score: number = 20; // state variable
let highscore: number = 0; // initiate highscore

const displayMessage = function (message: string): void {
  (document.querySelector('.message') as HTMLElement).textContent = message;
};

const displayScore = function (score: number): void {
  (document.querySelector('.score') as HTMLElement).textContent = String(score);
};

// BUTTON TO GUESS VALUE
document.querySelector('.check')?.addEventListener('click', function () {
  const guessInput = (document.querySelector('.guess') as HTMLInputElement).value;
  const guess = Number(guessInput);

  // Check if input is empty
  if (!guessInput) {
    displayMessage('No number chosen!');
    (document.querySelector('body') as HTMLElement).style.backgroundColor = '#FF0000'; // red color for no input
    return; // Stop further execution if input is empty
  }

  // Check if input is valid
  if (isNaN(guess) || guess < 1 || guess > 20) {
    displayMessage('Invalid Number! Must be between 1 and 20.');
    (document.querySelector('body') as HTMLElement).style.backgroundColor = '#FF0000'; // red color for invalid input
    return; // Stop further execution if input is invalid
  }

  // When the guess is correct
  if (guess === secretNumber) {
    displayMessage('Correct Number!');
    (document.querySelector('.number') as HTMLElement).textContent = String(secretNumber);
    (document.querySelector('body') as HTMLElement).style.backgroundColor = '#60b347'; // green color for correct guess
    (document.querySelector('.number') as HTMLElement).style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      (document.querySelector('.highscore') as HTMLElement).textContent = String(highscore);
    }

  // When the guess is wrong
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
      (document.querySelector('body') as HTMLElement).style.backgroundColor = 'var(--color-bg)'; // default color
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

// RESET THE GAME
document.querySelector('.again')?.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  (document.querySelector('.number') as HTMLElement).textContent = '?';
  (document.querySelector('.guess') as HTMLInputElement).value = '';
  (document.querySelector('body') as HTMLElement).style.backgroundColor = 'var(--color-bg)';
  (document.querySelector('.number') as HTMLElement).style.width = '15rem';
});
