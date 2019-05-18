import {initParallax} from './parallax';
import injectWorks from './workTemplate';
import '../styles/main.scss';
import * as works from './works';
import * as utils from './utils';
import {playAnimations} from './animations';
import {detect} from 'detect-browser';

window.onload = () => {
  // fix for jerky scrolling on position:fixed elements on IE and edge
  const browser = detect();
  if (browser && browser.name && (browser.name === 'edge' || browser.name === 'ie')) {
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
        window.removeEventListener('touchstart', onFirstTouch, false);
      },
      false
  );

  injectWorks();
  initParallax();
  utils.fixedSidebars();
  utils.graphicHeadingAnim();
  const workImages = document.getElementsByClassName('work__image');
  const workExitBtns = document.getElementsByClassName('work__exit-button');
  for (let i = 0; i < workImages.length; i++) {
    workImages[i].onclick = () => works.toggleWorkDetails(i);
    workExitBtns[i].onclick = () => works.toggleWorkDetails(i);
  }
  playAnimations();
};
