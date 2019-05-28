import {isElementInViewport} from './utils';
import lottie from 'lottie-web';

let footerEl;
let footerAnim;
let mobileFooterAnim;
let hasPlayedFooterAnim = false;

export const initFooterAnim = () => {
  footerEl = document.getElementById('footer');
  const footerAnimEls = footerEl.getElementsByClassName('footer__anim');
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

  // playFooterAnimIfNeeded();
};

export const playFooterAnimIfNeeded = () => {
  if (
    !hasPlayedFooterAnim &&
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight
  ) {
    footerAnim.play();
    mobileFooterAnim.play();
    hasPlayedFooterAnim = true;
  }
};
