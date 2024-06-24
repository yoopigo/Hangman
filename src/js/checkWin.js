import { modalAdd } from './modal';
import { body, modalOverlay } from './createElements';
import { isKeyboardBlocked } from './keyboard';

function checkWin() {
  const openLetters = document.querySelectorAll('.questions__letter');
  const combinedWord = Array.from(openLetters)
    .map((letter) => letter.textContent)
    .join('');

  const hiddenWord = document.querySelector('.visually-hidden').textContent;
  const questionsAttemptCounterFall = document.querySelector('.questions__attempt-counter-fall').textContent;

  if (combinedWord.toLowerCase() === hiddenWord.toLowerCase()) {
    modalAdd();
    const result = document.querySelector('.modal__result');
    result.textContent = 'Congratulations, you have won';
    const modalAnswer = document.querySelector('.modal__answer');
    modalAnswer.textContent = `Secret word: ${hiddenWord}`;
    body.appendChild(modalOverlay);
    isKeyboardBlocked = false;
  } else if (questionsAttemptCounterFall === '6') {
    modalAdd();
    const result = document.querySelector('.modal__result');
    result.textContent = 'You lost, try again';
    const modalAnswer = document.querySelector('.modal__answer');
    modalAnswer.textContent = `Secret word: ${hiddenWord}`;
    body.appendChild(modalOverlay);
    isKeyboardBlocked = false;
  }
}

export { checkWin };
