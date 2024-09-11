'use strict';
import './theme';

// DEFINE THE SECRET NUMBER - It must be defined only one time.
let secretNumber: number = Math.trunc(Math.random() * 20) + 1;
let score: number = 20; //state variable
let highscore: number = 0; // iniate highscore

const displayMessage = function (message: string): void {
  (document.querySelector('.message') as HTMLElement).textContent = message;
};

const displayScore = function (score: number): void {
  (document.querySelector('.score') as HTMLElement).textContent = String(score);
};

//BUTTON TO GUESS VALUE
document.querySelector('.check')?.addEventListener('click', function () {
  const guess = Number(
    (document.querySelector('.guess') as HTMLInputElement).value
  ); // convert to number value default is string.
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    //print a message when there's no input
    displayMessage('No Number!');
    (document.querySelector('body') as HTMLElement).style.backgroundColor =
      '#FF0000'; // set the color to red when number field is empty.

    //When player wins
  } else if (guess === secretNumber) {
    // compare "guess" with "secretnumber"
    displayMessage('Correct Number!');
    (document.querySelector('.number') as HTMLElement).textContent =
      String(secretNumber);

    //Changes Css Styles when wins:
    (document.querySelector('body') as HTMLElement).style.backgroundColor =
      '#60b347';
    (document.querySelector('.number') as HTMLElement).style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      (document.querySelector('.highscore') as HTMLElement).textContent =
        String(highscore);
    }
    //when the guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // if scores is greater than 1 - continue
      // prints message:
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); // guess < secretNumber = too low
      score--; //decreases the score by 1 and display it on score field.
      displayScore(score);
      (document.querySelector('body') as HTMLElement).style.backgroundColor =
        'var(--color-bg)'; //set color background back to black after picking first number.
    } else {
      //if it's lower than 1 - print message:
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

//RESET THE GAME
document.querySelector('.again')?.addEventListener('click', function () {
  score = 20; // reset the score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // reset secret number

  displayMessage('Start guessing...'); // Reset message
  displayScore(score); //reset score text content
  (document.querySelector('.number') as HTMLElement).textContent = '?'; // reset text content secret number
  (document.querySelector('.guess') as HTMLInputElement).value = ''; // reset value input field to empty

  //Reset Css Styles:
  (document.querySelector('body') as HTMLElement).style.backgroundColor =
    'var(--color-bg)';
  (document.querySelector('.number') as HTMLElement).style.width = '15rem';
});
