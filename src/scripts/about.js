import lottie from 'lottie-web';
import {isElementInViewport} from './utils';

let aboutEl;
let aboutAnim;
let hasPlayedAnim = false;

export const initAboutAnim = () => {
  aboutEl = document.getElementById('about__anim');
  aboutAnim = lottie.loadAnimation({
    container: aboutEl,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    autoload: false,
    path: '/animationData/about.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  playAboutAnimIfNeeded();
};

export const playAboutAnimIfNeeded = () => {
  if (!hasPlayedAnim && isElementInViewport(aboutEl)) {
    aboutAnim.playSegments([[0, 74], [75, 150]], true);
    hasPlayedAnim = true;
    // window.removeEventListener('scroll', playAboutIntroAndLoop);
  }
};

// window.addEventListener('scroll', playAboutIntroAndLoop);
