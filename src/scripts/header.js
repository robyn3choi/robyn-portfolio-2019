import lottie from 'lottie-web';
import {isMobile} from './utils';

const headerAnimEls = document.getElementsByClassName('header__robynchoi-anim');

const headerAnim = lottie.loadAnimation({
  container: headerAnimEls[0],
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/animationData/robynchoi.json',
});

const headerAnimMobile = lottie.loadAnimation({
  container: headerAnimEls[1],
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/animationData/robynchoi-mobile.json',
});

let hasAnimPlayed = false;
let hasAnimMobilePlayed = false;

export const playHeaderAnimIfNeeded = () => {
  if (window.pageYOffset === 0) {
    if (!hasAnimMobilePlayed && isMobile()) {
      headerAnimMobile.play();
      hasAnimMobilePlayed = true;
    }
    else if (!hasAnimPlayed && !isMobile()) {
      headerAnim.play();
      hasAnimPlayed = true;
    }
  }
};

window.addEventListener('resize', () => {
  playHeaderAnimIfNeeded();
});
