import {isStackedSections} from './utils';
import {isElementInViewport} from './utils';
import lottie from 'lottie-web';
import {smoothScrollTo} from './navigation';
import {playEnterAnimsIfNeeded} from './enterAnimations';

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
    const viewWorkInfo = () => {
      work.classList.add('work_viewing-info');

      if (!hasCupSpilled) {
        const cupRightEdgeX = document.getElementById('cup-anim__wrapper').getBoundingClientRect()
            .right;

        if (!isStackedSections()) {
          pollForCupSpill(work, cupRightEdgeX);
        }
      }

      toggleWorkBackBtn(index, true);
      window.removeEventListener('scrollStop', viewWorkInfo);
      // play enter anims after work has expanded
      setTimeout(() => playEnterAnimsIfNeeded(), 1000);
    };

    window.addEventListener('scrollStop', viewWorkInfo);
    smoothScrollTo(work);
  }
};

const toggleWorkBackBtn = (index, isViewingWorkInfo) => {
  if (
    document.body.classList.contains('ie') ||
    document.body.classList.contains('edge') ||
    document.body.classList.contains('touchscreen')
  ) {
    return;
  }
  if (isViewingWorkInfo) {
    if (workBackBtnAnims.length > 0) {
    }
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

  const workImages = document.getElementsByClassName('work__image');

  if (
    !(document.body.classList.contains('edge') || document.body.classList.contains('edge')) &&
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
