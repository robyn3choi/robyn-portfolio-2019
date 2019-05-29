import {isElementInViewport} from './utils';
import {hasPlayedAboutTypingAnim} from './about';

let enterAnims;

export const initEnterAnims = () => {
  enterAnims = document.getElementsByClassName('enter-anim_hidden');
};

const thresholdEl = document.getElementById('about__typed_2');
let finishedWaitingForAboutTypingAnims = false;
export const playEnterAnimsIfNeeded = () => {
  if (
    !finishedWaitingForAboutTypingAnims &&
    // (window.pageYOffset > thresholdEl.getBoundingClientRect().bottom + window.innerHeight ||
    (thresholdEl.getBoundingClientRect().bottom < 100 || hasPlayedAboutTypingAnim())
  ) {
    finishedWaitingForAboutTypingAnims = true;
  }
  if (finishedWaitingForAboutTypingAnims) {
    for (let i = enterAnims.length - 1; i >= 0; i--) {
      const workInfoAncestor = enterAnims[i].closest('.work__info');
      if (workInfoAncestor && isElementInViewport(enterAnims[i], true)) {
        enterAnims[i].classList.remove('enter-anim_hidden');
      }
      else if (isElementInViewport(enterAnims[i])) {
        enterAnims[i].classList.remove('enter-anim_hidden');
      }
    }
  }
};
