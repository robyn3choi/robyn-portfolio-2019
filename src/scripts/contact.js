import {isElementInViewport, playTypingAnimation} from './utils';

let contactEmailAnim;
const hasPlayedContactAnim = false;

export const initContactAnim = () => {
  // contactEmailAnim = document.getElementById('contact__email');
  // playContactAnimIfNeeded();
};

export const playContactAnimIfNeeded = () => {
  // if (!hasPlayedContactAnim && isElementInViewport(contactEmailAnim)) {
  //   setTimeout(
  //       () =>
  //         playTypingAnimation(document.getElementById('contact__email'), 'robyn3choi@gmail.com', 50),
  //       1200
  //   );
  //   hasPlayedContactAnim = true;
  //   return true;
  // }
  return false;
};
