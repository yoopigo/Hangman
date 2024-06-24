function creatingElement(selector, className) {
  const element = document.createElement(selector);
  element.classList.add(className);
  return element;
}

const body = document.querySelector('body');
const game = creatingElement('main', 'game');
const modalOverlay = creatingElement('div', 'modal-overlay');

export { creatingElement, body, game, modalOverlay };
