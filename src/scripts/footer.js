import {isElementInViewport} from './utils';
import lottie from 'lottie-web';

let footerEl;
let footerAnim;
let mobileFooterAnim;
let hasPlayedFooterAnim = false;

export const initFooterAnim = () => {
  const footerAnimEls = document.getElementsByClassName('footer__anim');
  footerAnim = lottie.loadAnimation({
    container: footerAnimEls[0],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animationData/footer.json',
  });

  mobileFooterAnim = lottie.loadAnimation({
    container: footerAnimEls[1],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animationData/footer-mobile.json',
  });

  footerEl = document.getElementById('footer');
  playFooterAnimIfNeeded();
};

export const playFooterAnimIfNeeded = () => {
  if (!hasPlayedFooterAnim && isElementInViewport(footerEl)) {
    footerAnim.play();
    mobileFooterAnim.play();
    hasPlayedFooterAnim = true;
  }
};
