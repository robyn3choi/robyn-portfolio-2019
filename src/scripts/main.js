import {initParallax} from './parallax';
import injectWorks from './workTemplate';
import '../styles/main.scss';
import {detect} from 'detect-browser';
import {initContactAnim, playContactAnimIfNeeded} from './contact';
import {fixSidebarIfNeeded, initFixedSidebars} from './fixedSidebars';
import {playGraphicHeadingsAnim, initGraphicHeadings} from './graphicHeadings';
import {isTouchscreen} from './utils';
import {playAboutAnimIfNeeded, initAboutAnim} from './about';
import {
  toggleWorkInfo,
  playWorksIntroIfNeeded,
  playWorkInfoBtnAnimIfNeeded,
  initWorkAnim,
} from './works';
import {playHeaderAnim} from './header';
import {playFooterAnimIfNeeded, initFooterAnim} from './footer';
import {initEnterAnims, playEnterAnimsIfNeeded} from './enterAnimations';

let isScrolling = false;

window.onload = () => {
  // fix for jerky scrolling on position:fixed elements on IE and edge
  const browser = detect();
  if (browser && browser.name && (browser.name === 'edge' || browser.name === 'ie')) {
    document.body.classList.add('edge-ie');
    window.addEventListener('mousewheel', function() {
      if (window.pageYOffset > 1080) {
        event.preventDefault();
        const wd = event.wheelDelta;
        const csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
      }
    });
  }
  // determine if user is on touchscreen device
  window.addEventListener(
      'touchstart',
      function onFirstTouch() {
        document.body.classList.add('touchscreen');
        isTouchscreen = true;
        window.removeEventListener('touchstart', onFirstTouch, false);
      },
      false
  );

  injectWorks();
  initParallax();
  initGraphicHeadings();
  const workImages = document.getElementsByClassName('work__image');
  const workExitBtns = document.getElementsByClassName('work__exit-button');
  for (let i = 0; i < workImages.length; i++) {
    workImages[i].onclick = () => {
      toggleWorkInfo(i);
      // play enter anims after work has expanded
      setTimeout(() => playEnterAnimsIfNeeded(), 1000);
    };
    workExitBtns[i].onclick = () => toggleWorkInfo(i);
  }
  initAboutAnim();
  initWorkAnim();
  initContactAnim();
  initFooterAnim();
  initEnterAnims();
  initFixedSidebars();

  window.addEventListener('scroll', () => {
    isScrolling = true;
  });

  setInterval(() => {
    if (isScrolling) {
      isScrolling = false;
      // playGraphicHeadingsAnim();
      if (playAboutAnimIfNeeded()) {
        return;
      }
      if (playWorksIntroIfNeeded()) {
        return;
      }
      if (playContactAnimIfNeeded()) {
        return;
      }
      playEnterAnimsIfNeeded();
      playWorkInfoBtnAnimIfNeeded();
      playFooterAnimIfNeeded();
    }
  }, 250);

  window.addEventListener('scroll', () => {
    fixSidebarIfNeeded();
  });

  playHeaderAnim();
};
