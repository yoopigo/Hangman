import { creatingElement, game } from './createElements';

function gallowsBlock() {
  const gallows = creatingElement('section', 'gallows');
  const gallowsLoopWrapper = creatingElement('div', 'gallows__loop-wrapper');

  const gallowsLoopImg = creatingElement('img', 'gallows__loop-img');

  const imgStep0 = require('../assets/step0.png');
  const imgStep1 = require('../assets/step1.png');
  const imgStep2 = require('../assets/step2.png');
  const imgStep3 = require('../assets/step3.png');
  const imgStep4 = require('../assets/step4.png');
  const imgStep5 = require('../assets/step5.png');
  const imgStep6 = require('../assets/step6.png');
  gallowsLoopImg.src = imgStep0;

  game.appendChild(gallows);
  gallows.appendChild(gallowsLoopWrapper);
  gallowsLoopWrapper.appendChild(gallowsLoopImg);
}

export { gallowsBlock };
