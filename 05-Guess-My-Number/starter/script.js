'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
const MAX_SCORE = 20;
const MIN_SCORE = 0;
let currentScore = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number');
  } else if (currentScore <= MIN_SCORE) {
    displayMessage('😔you lose');
  } else if (guess === number) {
    displayMessage('correct number');
    document.querySelector('.score').textContent = currentScore;
  } else if (guess > number) {
    currentScore--;
    displayMessage('📈 Too high');
    document.querySelector('.score').textContent = currentScore;
  } else if (guess < number) {
    currentScore--;
    displayMessage('📉 Too low');
    document.querySelector('.score').textContent = currentScore;
  }
  else{
    displayMessage('Correct number');
    document.querySelector('.number').textContent = number;
  }
});

document.querySelector('.again').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
  displayMessage('Start guessing');
  document.querySelector('.number').textContent = '?';
});
