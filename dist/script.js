'use strict';
var _a, _b;
import './theme.js';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
    document.querySelector('.score').textContent = String(score);
};
(_a = document.querySelector('.check')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    const guessInput = document.querySelector('.guess').value;
    const guess = Number(guessInput);
    if (!guessInput) {
        displayMessage('No number chosen!');
        document.querySelector('body').style.backgroundColor = '#FF0000';
        return;
    }
    if (isNaN(guess) || guess < 1 || guess > 20) {
        displayMessage('Invalid Number! Must be between 1 and 20.');
        document.querySelector('body').style.backgroundColor = '#FF0000';
        return;
    }
    if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = String(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = String(highscore);
        }
    }
    else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            displayScore(score);
            document.querySelector('body').style.backgroundColor = 'var(--color-bg)';
        }
        else {
            displayMessage('You lost the game!');
            displayScore(0);
        }
    }
});
(_b = document.querySelector('.again')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'var(--color-bg)';
    document.querySelector('.number').style.width = '15rem';
});
