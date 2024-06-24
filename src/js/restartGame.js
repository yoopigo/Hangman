import { gallowsBlock } from './gallowsBlock';
import { questionBlock } from './questionBlock';
import { isKeyboardBlocked } from './keyboard';
import { attempt } from './checkLetter';
import { blockedKeys } from './keyboard';

function restartGame(button) {
  button.addEventListener('click', (event) => {
    const game = document.querySelector('.game');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');

    modal.remove();
    overlay.remove();
    game.innerHTML = '';
    gallowsBlock();
    questionBlock();
    isKeyboardBlocked = true;
    attempt = 0;
    blockedKeys = {};
  });
}

export { restartGame };
