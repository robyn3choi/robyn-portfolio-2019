import lottie from 'lottie-web';
import {isElementInViewport, playTypingAnimation} from './utils';
import {playEnterAnimsIfNeeded} from './enterAnimations';

let aboutTyped;
let aboutAnim;
let hasStartedTypingAnim = false;
let hasFinishedTypingAnim = false;

export const initAboutAnim = () => {
  aboutTyped = document.getElementById('about__typed_1');
  aboutAnim = lottie.loadAnimation({
    container: document.getElementById('about__anim'),
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
  if (!hasStartedTypingAnim && isElementInViewport(aboutTyped)) {
    hasStartedTypingAnim = true;
    aboutAnim.playSegments([[0, 27], [28, 101]], true);
    setTimeout(() => {
      playTypingAnimation(
          document.getElementById('about__typed_1'),
          `Hey there, I'm Robyn Choi.`,
          40
      )
          .then(() =>
            playTypingAnimation(
                document.getElementById('about__typed_2'),
                `I'm a full-stack web developer based in Vancouver, Canada.`,
                20
            )
          )
          .then(() => {
            hasFinishedTypingAnim = true;
            playEnterAnimsIfNeeded();
          });
    }, 1000);
    return true;
  }
  return false;
};

export const hasPlayedAboutTypingAnim = () => {
  return hasFinishedTypingAnim;
};
