import { isElementInViewport } from './utils';

let enterAnims;

export const initEnterAnims = () => {
  enterAnims = document.getElementsByClassName('enter-anim--hidden');
};

export const playEnterAnimsIfNeeded = () => {
  for (let i = enterAnims.length - 1; i >= 0; i--) {
    const workInfoAncestor = enterAnims[i].closest('.work__info');
    if (workInfoAncestor && isElementInViewport(enterAnims[i], true)) {
      enterAnims[i].classList.remove('enter-anim--hidden');
    } else if (isElementInViewport(enterAnims[i])) {
      enterAnims[i].classList.remove('enter-anim--hidden');
    }
  }
};
