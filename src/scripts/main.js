import Rellax from 'rellax';
// import './workData';
import injectWorks from './workTemplate';
import * as utils from './utils';

var headerParallax = new Rellax('.header__parallax');
var footerParallax = new Rellax('.footer__parallax', {
  wrapper: '.footer',
  relativeToWrapper: true
});

const toggleWorkDetails = (index) => 
{
  const work = document.getElementsByClassName('work')[index];
  if (work.classList.contains('work_viewing-details')) 
  {
    work.classList.remove('work_viewing-details');
  }
  else 
  {
    work.classList.add('work_viewing-details');
  }
}

window.onload = () => 
{
  injectWorks();
  utils.fixedSidebars();
  utils.graphicHeadingAnim();
  const workDetailsBtns = document.getElementsByClassName('work__details-button');
  for (let i=0; i<workDetailsBtns.length;i++) 
  {
    workDetailsBtns[i].onclick = () => toggleWorkDetails(i);
  }
}