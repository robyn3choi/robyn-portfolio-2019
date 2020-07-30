import { detect } from 'detect-browser';
import { initParallax } from './parallax';
import injectWorks from './workTemplate';
import { fixSidebarIfNeeded, initFixedSidebars } from './sidebars';
import { playAboutAnimIfNeeded, initAboutAnim } from './about';
import { toggleWorkInfo, playWorksIntroIfNeeded, initWorkAnim } from './works';
import { playFooterAnimIfNeeded, initFooterAnim } from './footer';
import { initEnterAnims, playEnterAnimsIfNeeded } from './enterAnimations';
import { playHeaderAnimIfNeeded } from './header';
import { modifyNavAndNextSectionBtnIfNeeded } from './navigation';
import { resizeGraphicHeadings } from './graphicHeadings';
import '../styles/main.scss';

let isScrolling = false;

function handleFirstTab(e) {
  // the "I am a keyboard user" key
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);

// fix for jerky scrolling on position:fixed elements on IE and edge
const browser = detect();
if (
  browser &&
  browser.name &&
  (browser.name === 'edge' || browser.name === 'ie')
) {
  window.addEventListener('mousewheel', (event) => {
    if (window.pageYOffset > 1080) {
      event.preventDefault();
      const wd = event.wheelDelta;
      const csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    }
  });
  if (browser.name === 'edge') {
    document.body.classList.add('edge');
  } else {
    document.body.classList.add('ie');
  }
}
// determine if user is on touchscreen device
window.addEventListener(
  'touchstart',
  function onFirstTouch() {
    document.body.classList.add('touchscreen');
    window.removeEventListener('touchstart', onFirstTouch, false);
  },
  false,
);

injectWorks();
initParallax();
const workImages = document.getElementsByClassName('work__image');
const workExitBtns = document.getElementsByClassName('work__exit-button');
for (let i = 0; i < workImages.length; i++) {
  workImages[i].onclick = () => {
    toggleWorkInfo(i);
  };
  workExitBtns[i].onclick = () => toggleWorkInfo(i);
}
resizeGraphicHeadings();
initAboutAnim();
initWorkAnim();
initFooterAnim();
initEnterAnims();
modifyNavAndNextSectionBtnIfNeeded();

if (document.body.classList.contains('ie')) {
  initFixedSidebars();
  window.addEventListener('scroll', () => {
    fixSidebarIfNeeded();
  });
}

window.addEventListener('scroll', () => {
  isScrolling = true;
});

const playScrollDependentAnims = () => {
  playHeaderAnimIfNeeded();
  playAboutAnimIfNeeded();
  playWorksIntroIfNeeded();
  playEnterAnimsIfNeeded();
  playFooterAnimIfNeeded();
  modifyNavAndNextSectionBtnIfNeeded();
};

window.onload = () => {
  const preloader = document.getElementsByClassName('preloader')[0];
  preloader.classList.add('preloader--finished');
  setTimeout(() => {
    playScrollDependentAnims();
    setInterval(() => {
      if (isScrolling) {
        isScrolling = false;
        playScrollDependentAnims();
      }
    }, 250);
  }, 1000);
};
