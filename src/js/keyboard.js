import { creatingElement } from './createElements';
let isKeyboardBlocked = true;
const blockedKeys = {};

const keyCode = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
function keyboard(pressKey) {
  const keyboardBlock = creatingElement('div', 'keyboard');

  for (let i = 0; i < keyCode.length; i++) {
    const keyElement = creatingElement('button', 'keyboard__key');
    keyElement.setAttribute('data-key', keyCode[i]);
    keyElement.textContent = keyCode[i];
    keyElement.addEventListener('click', function () {
      pressKey(keyCode[i]);
      keyElement.disabled = 'true';
    });
    keyboardBlock.appendChild(keyElement);
  }

  pressKeyPhysical(pressKey);
  keyboardClick();

  return keyboardBlock;
}

function pressKeyPhysical(pressKey) {
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (keyCode.includes(key) && isKeyboardBlocked && !blockedKeys[key]) {
      pressKey(key);
      blockedKeys[key] = true;
    }
  });
}

function keyboardClick() {
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keypress', function (event) {
      document.querySelectorAll('.keyboard__key').forEach((element) => {
        element.classList.remove('keyboard__key--active');
      });
      const pressedKey = document.querySelector('.keyboard__key[data-key="' + event.key.toLowerCase() + '"]');
      if (pressedKey && isKeyboardBlocked) {
        pressedKey.disabled = 'true';
      }
    });

    document.querySelectorAll('.keyboard__key').forEach((element) => {
      element.onclick = function () {
        document.querySelectorAll('.keyboard__key').forEach((element) => {
          element.classList.remove('keyboard__key--active');
        });
        this.classList.add('keyboard__key--active');
      };
    });
  });
}

export { keyboard, isKeyboardBlocked, blockedKeys };
