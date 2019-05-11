import Rellax from 'rellax';
// import './workData';
import injectWorks from './workTemplate';
import '../styles/main.scss';
import * as works from './works';
import * as utils from './utils';

var headerParallax = new Rellax('.header__parallax');
var footerParallax = new Rellax('.footer__parallax', {
  wrapper: '.footer',
  relativeToWrapper: true
});


window.onload = () => 
{
  window.addEventListener('touchstart', function onFirstTouch() {
    document.body.classList.add('touchscreen');
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);
  injectWorks();
  utils.fixedSidebars();
  utils.graphicHeadingAnim();
  const workImages = document.getElementsByClassName('work__image');
  for (let i=0; i<workImages.length;i++) 
  {
    workImages[i].onclick = () => works.toggleWorkDetails(i);
  }
}