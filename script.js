'use strict';

// get theme on page load
// localStorage.getItem('theme');

// set theme on button press
// localStorage.setItem('theme', newTheme);

// const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
// or
// const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return 'dark';
  }

  return 'light';
}

const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

//target the button using the data attribute from html.
const button = document.querySelector('[data-theme-toggle]');

button.addEventListener('click', () => {
  const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

  //update the button text
  const newCta =
    newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
  button.innerText = newCta;

  // use an aria-label if you are omitting text on the button
  // and using sun/moon icons, for example
  button.setAttribute('aria-label', newCta);

  // update theme attribute on HTML to switch theme in CSS
  document.querySelector('html').setAttribute('data-theme', newTheme);

  // update in local storage
  localStorage.setItem('theme', newTheme);

  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;
});

// DEFINE THE SECRET NUMBER - It must be defined only one time.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highscore = 0; // iniate highscore

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//BUTTON TO GUESS VALUE
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // convert to number value default is string.
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    //print a message when there's no input
    displayMessage('No Number!');
    document.querySelector('body').style.backgroundColor = '#FF0000'; // set the color to red when number field is empty.

    //When player wins
  } else if (guess === secretNumber) {
    // compare "guess" with "secretnumber"
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //Changes Css Styles when wins:
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when the guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // if scores is greater than 1 - continue
      // prints message:
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); // guess < secretNumber = too low
      score--; //decreases the score by 1 and display it on score field.
      displayScore(score);
      document.querySelector('body').style.backgroundColor = '#222'; //set color background back to black after picking first number.
    } else {
      //if it's lower than 1 - print message:
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }

  /* //When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      // if scores is greater than 1 - continue
      // prints message:
      document.querySelector('.message').textContent = 'Too high!';
      score--; //decreases the score by 1 and display it on score field.
      document.querySelector('.score').textContent = score;
    } else {
      //if it's lower than 1 - print message:
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      // prints message:
      document.querySelector('.message').textContent = 'Too low!';
      score--; //decreases the score by 1 and display it on score field.
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

//RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // reset the score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // reset secret number

  displayMessage('Start guessing...'); // Reset message
  displayScore(score); //reset score text content
  document.querySelector('.number').textContent = '?'; // reset text content secret number
  document.querySelector('.guess').value = ''; // reset value input field to empty

  //Reset Css Styles:
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
