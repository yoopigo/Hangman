import { checkWin } from './checkwin';

let attempt = 0;
function checkLetter(key) {
  const letters = document.querySelectorAll('.questions__letter');
  let letterRevealed = false;

  const hiddenWord = document.querySelector('.visually-hidden').textContent;
  const questionsAttemptCounterFall = document.querySelector('.questions__attempt-counter-fall');
  const gallowsImg = document.querySelector('.gallows__loop-img');

  for (let i = 0; i < hiddenWord.length; i++) {
    if (hiddenWord[i].toLowerCase() === key) {
      if (letters[i].textContent === '-') {
        letters[i].textContent = hiddenWord[i];
        letterRevealed = true;
      }
    }
  }

  if (!letterRevealed) {
    if (attempt >= 6) {
      gallowsImg.src = require(`../assets/step${attempt}.png`);
    } else {
      attempt++;
      questionsAttemptCounterFall.textContent = attempt;
      gallowsImg.src = require(`../assets/step${attempt}.png`);
    }
  }

  checkWin();
}

export { checkLetter, attempt };
