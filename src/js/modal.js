import { creatingElement, body } from './createElements';
import { restartGame } from './restartGame';

function modalAdd() {
  const modal = creatingElement('div', 'modal');
  body.appendChild(modal);
  const result = creatingElement('p', 'modal__result');
  modal.appendChild(result);
  const answer = creatingElement('p', 'modal__answer');
  modal.appendChild(answer);
  const buttonModal = creatingElement('button', 'modal__button');
  buttonModal.textContent = 'Play again';
  modal.appendChild(buttonModal);

  restartGame(buttonModal);
}

export { modalAdd };
