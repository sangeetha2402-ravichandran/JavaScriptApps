'use strict';

//Selecting elements from the DOM
const score0 = document.querySelector('#score--0'); // toal score of player 1
const score1 = document.querySelector('#score--1'); //total score of player 2
const player0 = document.querySelector('.player--0'); // this is player 1 screen
const player1 = document.querySelector('.player--1'); // this is player 2 screen
const current0 = document.querySelector('#current--0'); //current score of player 1 after rolling the dice
const current1 = document.querySelector('#current--1'); //current score of player 2 after rolling the dice
const dice = document.querySelector('.dice'); // dice which is at the center
const btnRoll = document.querySelector('.btn--roll'); //button to roll the dice
const btnHold = document.querySelector('.btn--hold'); //hold button to hold the current score
const btnNew = document.querySelector('.btn--new'); //new button to start a new game
//Initial scores
score0.textContent = 0; //currently total score set to 0 for player 1
score1.textContent = 0; //currently total score set to 0 for player 2
dice.classList.add('hidden'); // initially hide the dice

// this action is for rolling the dice
// when the button is clicked, a random number between 1 and 6 is generated
// and the dice image is updated accordingly
// If the rolled number is not 1, it adds the number to the current score of the active player it continues to add until the player rolls a 1
// If the rolled number is 1, it switches to the next player
//if it not equal to 1 then we need to add the dice roll value to the current score to keep on adding the current score

document.querySelector('.btn--roll').addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;
  if (diceRoll !== 1) {
    // Add dice roll to current score
    if (player0.classList.contains('player--active')) {
      const currentScore = Number(current0.textContent);
      current0.textContent = currentScore + diceRoll;
    } else {
      const currentScore = Number(current1.textContent);
      current1.textContent = currentScore + diceRoll;
    }
  } else {
    // Switch player
    switchPlayer();
  }
});

//this action is for holding the current score
// When the hold button is clicked, it adds the current score to the total score of the active player
// If the total score reaches or exceeds 100, the player is declared the winner
// If not, it switches to the next player
// If player 1 is active, it adds the current score to player 1's total
// If player 2 is active, it adds the current score to player 2's total
// If the total score reaches or exceeds 100, it adds the winner class to the active player and removes the active class
// It also hides the dice
document.querySelector('.btn--hold').addEventListener('click', function () {
  const currentScore = player0.classList.contains('player--active')
    ? Number(current0.textContent)
    : Number(current1.textContent);

  if (player0.classList.contains('player--active')) {
    if (player0.classList.contains('player--active')) {
      const score = Number(score0.textContent);
      score0.textContent = score + currentScore;
      if (score0.textContent >= 100) {
        player0.classList.add('player--winner');
        player0.classList.remove('player--active');
        dice.classList.add('hidden');
      } else {
        switchPlayer();
      }
    }
  } else {
    const score = Number(score1.textContent);
    score1.textContent = score + currentScore;
    if (score1.textContent >= 100) {
      player1.classList.add('player--winner');
      player1.classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

//When the new game button is clicked, it resets the scores and current scores to 0
// It also removes the winner class from both players and sets player 0 as the active player
// Finally, it hides the dice
document.querySelector('.btn--new').addEventListener('click', function () {
  // Reset scores and current scores
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  // Remove winner class and reset active player
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  // Hide the dice
  dice.classList.add('hidden');
});

//here we are switching the player
// If player 1 is active, it switches to player 2 and resets player 1
// If player 2 is active, it switches to player 1 and resets player 2
// It also resets the current score display for the inactive player to 0
const switchPlayer = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    current0.textContent = 0;
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    current1.textContent = 0;
  }
};
