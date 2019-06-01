import lottie from 'lottie-web';
import {isElementInViewport, playTypingAnimation, isStackedSections, isMobile} from './utils';
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

let isSidebarAnimPlaying = false;
export const playAboutAnimIfNeeded = () => {
  if (hasStartedSidebarAnim) {
    // if sidebar is offsreen
    const aboutSidebarBottom = aboutSidebar.getBoundingClientRect().bottom;
    if (isSidebarAnimPlaying && aboutSidebarBottom <= 0) {
      aboutAnim.pause();
      isSidebarAnimPlaying = false;
    }
    else if (!isSidebarAnimPlaying && aboutSidebarBottom > 0) {
      aboutAnim.playSegments([[28, 101]], true);
      isSidebarAnimPlaying = true;
    }
  }
  else {
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

      const aboutTyped1 = document.getElementById('about__typed_1');
      // on mobile, the about__typed elements are already visible so we can skip the typing anim
      if (isMobile()) {
        hasFinishedTypingAnim = true;
        playEnterAnimsIfNeeded();
      }
      else {
        setTimeout(
            () => {
              playTypingAnimation(aboutTyped1, 40)
                  .then(() => playTypingAnimation(document.getElementById('about__typed_2'), 30))
                  .then(() => {
                    hasFinishedTypingAnim = true;
                    playEnterAnimsIfNeeded();
                  });
            },
          isStackedSections() ? 100 : 1000
        );
      }
    }
  }
};

export const hasPlayedAboutTypingAnim = () => {
  return hasFinishedTypingAnim;
};
