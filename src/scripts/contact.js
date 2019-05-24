import {isElementInViewport} from './utils';

let contactSection;
let hasPlayedContactAnim = false;

export const initContactAnim = () => {
  contactSection = document.getElementById('contact');
  playContactAnimIfNeeded();
};

export const playContactAnimIfNeeded = () => {
  if (!hasPlayedContactAnim && isElementInViewport(contactSection)) {
    let i = 0;
    const typingAnim = () => {
      const txt = 'robyn3choi@gmail.com';
      const speed = 80;
      const targetEl = document.getElementById('contact__email');
      if (i < txt.length) {
        targetEl.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingAnim, speed);
      }
    };

    typingAnim();
    hasPlayedContactAnim = true;
  }
};
