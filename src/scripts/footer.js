import lottie from 'lottie-web';
import { isElementInViewport, isMobile } from './utils';

let footerEl;
let footerAnim;
let footerAnimMobile;
let hasAnimPlayed = false;
let hasAnimMobilePlayed = false;

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

  footerAnimMobile = lottie.loadAnimation({
    container: footerAnimEls[1],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animationData/footer-mobile.json',
  });
};

export const playFooterAnimIfNeeded = () => {
  if (isElementInViewport(footerEl)) {
    if (!hasAnimMobilePlayed && isMobile()) {
      footerAnimMobile.play();
      hasAnimMobilePlayed = true;
    } else if (!hasAnimPlayed && !isMobile()) {
      footerAnim.play();
      hasAnimPlayed = true;
    }
  }
};

window.addEventListener('resize', () => {
  playFooterAnimIfNeeded();
});
