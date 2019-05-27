import {isStackedSections, isTouchscreen} from './utils';
import {isElementInViewport} from './utils';
import lottie from 'lottie-web';

let hasCupSpilled = false;
const workInfoBtnAnims = [];
const workBackBtnAnims = [];
let worksArtContainer;
let hasPlayedWorkIntro = false;

export const toggleWorkInfo = (index) => {
  const work = document.getElementsByClassName('work-container')[index];

  if (work.classList.contains('work_viewing-info')) {
    work.classList.remove('work_viewing-info');
    toggleWorkBackBtn(index, false);
  }
  else {
    work.classList.add('work_viewing-info');
    toggleWorkBackBtn(index, true);

    if (!hasCupSpilled) {
      const cupRightEdgeX = document.getElementById('cup-anim__wrapper').getBoundingClientRect()
          .right;

      if (!isStackedSections()) {
        pollForCupSpill(work, cupRightEdgeX);
      }
    }
  }
};

const toggleWorkBackBtn = (index, isViewingWorkInfo) => {
  if (isViewingWorkInfo) {
    workBackBtnAnims[index].playSegments([0, 30], true);
  }
  else {
    workBackBtnAnims[index].playSegments([31, 38], true);
  }
};

function pollForCupSpill(work, cupRightEdgeX) {
  if (work.getBoundingClientRect().left <= cupRightEdgeX) {
    document.getElementById('cup-anim').style.animation = 'cup-spill 0.1s steps(3) forwards';
    hasCupSpilled = true;
  }
  else {
    setTimeout(() => pollForCupSpill(work, cupRightEdgeX), 50);
  }
}

export const initWorkAnim = () => {
  worksArtContainer = document.getElementById('works-art-container');
  playWorksIntroIfNeeded();

  const workImages = document.getElementsByClassName('work__image');

  if (
    !document.body.classList.contains('edge-ie') &&
    !document.body.classList.contains('touchscreen')
  ) {
    for (let i = 0; i < workImages.length; i++) {
      const infoBtn = workImages[i].getElementsByClassName('work__arrow-button_info')[0];
      const infoBtnAnim = lottie.loadAnimation({
        container: infoBtn,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/animationData/work-info-btn.json',
      });

      workInfoBtnAnims.push(infoBtnAnim);

      const backBtn = workImages[i].getElementsByClassName('work__arrow-button_back')[0];
      const backBtnAnim = lottie.loadAnimation({
        container: backBtn,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/animationData/work-back-btn.json',
      });
      workBackBtnAnims.push(backBtnAnim);

      workImages[i].addEventListener('mouseenter', () => {
        infoBtnAnim.playSegments([0, 30], true);
      });

      workImages[i].addEventListener('mouseleave', () => {
        infoBtnAnim.playSegments([31, 38], true);
      });
    }
  }
};

export const playWorkInfoBtnAnimIfNeeded = () => {
  if (isTouchscreen && isElementInViewport(workImages[i])) {
    infoBtnAnim.playSegments([0, 30], true);
  }
};

export const playWorksIntroIfNeeded = () => {
  if (!hasPlayedWorkIntro && isElementInViewport(worksArtContainer)) {
    const artElements = document.getElementsByClassName('works-art');
    for (let i = 0; i < artElements.length; i++) {
      artElements[i].classList.add('works-art_show');
    }
    hasPlayedWorkIntro = true;
    return true;
  }
  return false;
};
