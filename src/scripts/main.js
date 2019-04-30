import Rellax from 'rellax';
import * as utils from './utils';

var rellax = new Rellax('.rellax');


// utils.workImageHover();



const seeWorkDetails = () => 
{
  activeWork = document.getElementsByClassName('work__image_hover')[0].parentElement;
  activeWork.classList.add('work_viewing-details');
}

window.onload = () => 
{
  utils.fixedSidebars();
  utils.graphicHeadingAnim();
  const workDetailsBtns = document.getElementsByClassName('work__details-button');
  for (let btn of workDetailsBtns) 
  {
    btn.onclick = seeWorkDetails;
  }
}