import {isElementInViewport} from './utils';

let enterAnims;

export const initEnterAnims = () => {
  enterAnims = document.getElementsByClassName('enter-anim_hidden');
  playEnterAnimsIfNeeded();
};

export const playEnterAnimsIfNeeded = () => {
  for (let i = enterAnims.length - 1; i >= 0; i--) {
    if (isElementInViewport(enterAnims[i])) {
      enterAnims[i].classList.remove('enter-anim_hidden');
    }
  }
};
