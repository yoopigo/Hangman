import '../style/style.scss';

import { body, game } from './createElements';
import { gallowsBlock } from './gallowsBlock';
import { questionBlock } from './questionBlock';

body.appendChild(game);

gallowsBlock();
questionBlock();
