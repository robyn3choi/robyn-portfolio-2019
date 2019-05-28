import {isElementInViewport} from './utils';
import {hasPlayedAboutTypingAnim} from './about';

let enterAnims;

export const initEnterAnims = () => {
  enterAnims = document.getElementsByClassName('enter-anim_hidden');
  // playEnterAnimsIfNeeded();
};

const thresholdEl = document.getElementById('about__typed_2');
let finishedWaitingForAboutTypingAnims = false;
export const playEnterAnimsIfNeeded = () => {
  if (
    !finishedWaitingForAboutTypingAnims &&
    (window.pageYOffset > thresholdEl.getBoundingClientRect().bottom + window.innerHeight ||
      hasPlayedAboutTypingAnim())
  ) {
    finishedWaitingForAboutTypingAnims = true;
  }
  if (finishedWaitingForAboutTypingAnims) {
    for (let i = enterAnims.length - 1; i >= 0; i--) {
      if (isElementInViewport(enterAnims[i])) {
        enterAnims[i].classList.remove('enter-anim_hidden');
      }
    }
  }
};
