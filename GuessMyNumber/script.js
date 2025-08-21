'use strict';
// Game Logic for Number Guessing Game
let score = 20; // Initialize score variable
let highscore = 0; // Initialize highscore variable


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number: ', secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
    };

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  // Implement your game logic here
  if (!guess) {
    displayMessage = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = guess;
    if (score > 0) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      score++;
      document.querySelector('.score').textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
    displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
        // Display a hint based on the guess
      displayMessage (guess > secretNumber ? '📈 Too high!' : '📈 Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
      console.log('SCoreValue', document.querySelector('.score').textContent);
    } else {
      displayMessage = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
   
  }
  
 
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20; // Reset score variable
});
