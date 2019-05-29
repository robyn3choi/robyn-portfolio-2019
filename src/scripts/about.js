import lottie from 'lottie-web';
import {isElementInViewport, playTypingAnimation, isStackedSections} from './utils';
import {playEnterAnimsIfNeeded} from './enterAnimations';

let aboutTyped;
let aboutSidebar;
let aboutAnim;
let hasStartedTypingAnim = false;
let hasFinishedTypingAnim = false;
let hasStartedSidebarAnim = false;

export const initAboutAnim = () => {
  aboutTyped = document.getElementById('about__typed_1');
  aboutSidebar = document.getElementsByClassName('section__sidebar_about')[0];
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
};

export const playAboutAnimIfNeeded = () => {
  if (!hasStartedSidebarAnim && isStackedSections() && isElementInViewport(aboutSidebar)) {
    aboutAnim.playSegments([[10, 27], [28, 101]], true);
    hasStartedSidebarAnim = true;
  }
  if (!hasStartedTypingAnim && isElementInViewport(aboutTyped)) {
    hasStartedTypingAnim = true;
    if (!hasStartedSidebarAnim) {
      aboutAnim.playSegments([[10, 27], [28, 101]], true);
      hasStartedSidebarAnim = true;
    }
    setTimeout(() => {
      playTypingAnimation(
          document.getElementById('about__typed_1'),
          `Hey there, I'm Robyn Choi.`,
          35
      )
          .then(() =>
            playTypingAnimation(
                document.getElementById('about__typed_2'),
                `I'm a full-stack web developer based in Vancouver, Canada.`,
                15
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
