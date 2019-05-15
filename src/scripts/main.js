import {initParallax} from './parallax';
import injectWorks from './workTemplate';
import '../styles/main.scss';
import * as works from './works';
import * as utils from './utils';

window.onload = () => {
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
};
