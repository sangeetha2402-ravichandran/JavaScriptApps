Pig Game – Explanation

This project is a two-player dice game where the goal is to reach 100 points before the opponent. The game is built using HTML, CSS, and JavaScript.

How the Game Works
1. Initial Setup

Both players’ total scores start at 0.

The dice is hidden at the beginning.

Player 1 starts as the active player.

2. Rolling the Dice

When the Roll Dice button is clicked, a random number between 1 and 6 is generated.

The dice image updates to match the rolled number.

If the number is not 1, it is added to the current score of the active player.

If the number is 1, the current score resets to 0, and the turn switches to the other player.

3. Holding the Score

When the Hold button is clicked:

The active player’s current score is added to their total score.

If the total score is 100 or more, that player wins:

Their section is marked as the winner.

The dice is hidden.

If the score is less than 100, the turn switches to the other player.

4. Switching Players

The active status moves to the other player.

The current score of the previous player resets to 0.

5. Starting a New Game

When the New Game button is clicked:

All total scores and current scores reset to 0.

The winner status is removed from both players.

Player 1 becomes the active player again.

The dice is hidden.

Game Flow

Player rolls the dice.

Decide to keep rolling or hold.

Rolling adds points unless a 1 is rolled.

Holding secures points and switches turns.

First player to reach 100 points wins.
