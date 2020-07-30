import lottie from 'lottie-web';
import { isElementInViewport } from './utils';

let aboutSidebar;
let aboutAnim;
let hasStartedSidebarAnim = false;

export const initAboutAnim = () => {
  aboutSidebar = document.getElementsByClassName('section__sidebar--about')[0];
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
    } else if (!isSidebarAnimPlaying && aboutSidebarBottom > 0) {
      aboutAnim.playSegments([[28, 101]], true);
      isSidebarAnimPlaying = true;
    }
  } else if (isElementInViewport(aboutSidebar)) {
    aboutAnim.playSegments(
      [
        [10, 27],
        [28, 101],
      ],
      true,
    );
    hasStartedSidebarAnim = true;
  }
};
