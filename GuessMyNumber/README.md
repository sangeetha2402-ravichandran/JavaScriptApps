# 🎮 Guess My Number Game

## 📌 Overview
This is a simple number guessing game built using **HTML, CSS, and JavaScript**.  
The player has to guess a random secret number between **1 and 20**.

---

## 🚀 How to Play
1. The game generates a **secret number** between 1 and 20.
2. You start with a **score of 20**.
3. Enter your guess and press **Check!**.
   - If no number is entered → "⛔ No number!"
   - If the guess is correct → "🎉 Correct Number!", background turns green, and score updates.
   - If the guess is wrong → "📈 Too high!" or "📉 Too low!", and the score decreases by 1.
4. If score reaches 0 → "💥 You lost the game!".
5. Press **Again!** to restart the game.

---

## 🛠️ Game Logic

### Variables
- `score = 20` → Player’s current score.
- `highscore = 0` → Best score achieved so far.
- `secretNumber` → Random number between 1 and 20.

### Function
```js
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
```
- Updates the feedback message on the screen.

### Main Game Flow
- **No Input**
  ```js
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  ```
- **Correct Guess**
  ```js
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    score++;
    document.querySelector('.score').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  ```
- **Wrong Guess**
  ```js
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  ```

### Reset Game
```js
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
```

---

## 📊 Game Flow Summary
1. Generate a random secret number (1–20).
2. Player enters guess → Clicks **Check!**.
3. Correct → Reveal number + Win.  
   Wrong → Hint shown + Score decreases.  
   Score = 0 → Game over.  
4. Click **Again!** to restart.

---

## 📂 Project Files
- `index.html` → Game structure.
- `style.css` → Styling.
- `script.js` → Game logic.

---

## 🏆 Features
- Random secret number each round.
- Live score tracking.
- Highscore tracking.
- Restart option with **Again!** button.

---

