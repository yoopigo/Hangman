import { questionsAnswer } from './questions';
import { creatingElement, game } from './createElements';
import { keyboard } from './keyboard';
import { checkLetter } from './checkLetter';

function questionBlock() {
  const questionsBlock = creatingElement('section', 'questions');
  const questionsWord = creatingElement('div', 'questions__word');
  game.appendChild(questionsBlock);
  questionsBlock.appendChild(questionsWord);

  const questionsHint = creatingElement('p', 'questions__hint');
  const randomIndex = Math.floor(Math.random() * questionsAnswer.length);
  const randomQuestion = questionsAnswer[randomIndex].question;
  const randomAnswer = questionsAnswer[randomIndex].answer;

  const hiddenAnswer = creatingElement('p', 'visually-hidden');
  hiddenAnswer.textContent = randomAnswer;
  questionsBlock.appendChild(hiddenAnswer);

  const textLetter = randomAnswer;
  for (let i = 0; i < textLetter.length; i++) {
    const newElement = document.createElement('p');
    newElement.className = 'questions__letter';
    newElement.textContent = '-';
    questionsWord.appendChild(newElement);
  }

  questionsHint.textContent = randomQuestion;
  questionsBlock.appendChild(questionsHint);

  const questionsAttemptCounter = creatingElement('div', 'questions__attempt-counter');
  const questionsAttemptCounterText = creatingElement('p', 'questions__attempt-counter-text');
  questionsAttemptCounterText.textContent = 'Incorrect guesses';

  const questionsAttemptCounterCount = creatingElement('div', 'questions__attempt-counter-count');

  const questionsAttemptCounterFall = creatingElement('p', 'questions__attempt-counter-fall');
  questionsAttemptCounterFall.textContent = '0';

  const questionsAttemptCounterDelimiter = creatingElement('span', 'questions__attempt-counter-delimiter');
  questionsAttemptCounterDelimiter.textContent = '/';

  const questionsAttemptCounterQuantity = creatingElement('p', 'questions__attempt-counter-quantity');
  questionsAttemptCounterQuantity.textContent = '6';

  questionsBlock.appendChild(questionsAttemptCounter);
  questionsAttemptCounter.appendChild(questionsAttemptCounterText);
  questionsAttemptCounter.appendChild(questionsAttemptCounterCount);
  questionsAttemptCounterCount.appendChild(questionsAttemptCounterFall);
  questionsAttemptCounterCount.appendChild(questionsAttemptCounterDelimiter);
  questionsAttemptCounterCount.appendChild(questionsAttemptCounterQuantity);

  const keyboardBlock = keyboard(checkLetter);
  questionsBlock.appendChild(keyboardBlock);

  console.log(randomAnswer);
}

export { questionBlock };
