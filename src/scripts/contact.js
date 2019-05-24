import {isElementInViewport, playTypingAnimation} from './utils';

let contactSection;
let hasPlayedContactAnim = false;

export const initContactAnim = () => {
  contactSection = document.getElementById('contact');
  playContactAnimIfNeeded();
};

export const playContactAnimIfNeeded = () => {
  if (!hasPlayedContactAnim && isElementInViewport(contactSection)) {
    playTypingAnimation(document.getElementById('contact__email'), 'robyn3choi@gmail.com', 50);
    hasPlayedContactAnim = true;
  }
};
