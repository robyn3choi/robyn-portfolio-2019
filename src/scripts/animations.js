import lottie from 'lottie-web';
import {isElementInViewport} from './utils';

const workInfoBtnAnims = [];
const workBackBtnAnims = [];

export const initAnimations = () => {
  // HEADER
  lottie.loadAnimation({
    container: document.getElementById('header__robynchoi-anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/animationData/robynchoi.json',
  });

  // ABOUT
  const aboutEl = document.getElementById('about__anim');
  const aboutAnim = lottie.loadAnimation({
    container: aboutEl,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    autoload: false,
    path: '/animationData/about.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  const playAboutIntroAndLoop = () => {
    if (isElementInViewport(aboutEl)) {
      aboutAnim.playSegments([[0, 74], [75, 150]], true);
      window.removeEventListener('scroll', playAboutIntroAndLoop);
    }
  };

  window.addEventListener('scroll', playAboutIntroAndLoop);
  playAboutIntroAndLoop();

  // WORKS
  const worksArtContainer = document.getElementById('works-art-container');
  const playWorksIntroIfNeeded = () => {
    if (isElementInViewport(worksArtContainer)) {
      const artElements = document.getElementsByClassName('works-art');
      for (let i = 0; i < artElements.length; i++) {
        artElements[i].classList.add('works-art_show');
      }
      window.removeEventListener('scroll', playWorksIntroIfNeeded);
    }
  };
  window.addEventListener('scroll', playWorksIntroIfNeeded);
  playWorksIntroIfNeeded();

  const workImages = document.getElementsByClassName('work__image');

  for (let i = 0; i < workImages.length; i++) {
    const infoBtn = workImages[i].getElementsByClassName('work__info-button')[0];
    const infoBtnAnim = lottie.loadAnimation({
      container: infoBtn,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animationData/work-info-btn.json',
    });

    workInfoBtnAnims.push(infoBtnAnim);

    const backBtn = workImages[i].getElementsByClassName('work__back-button')[0];
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

    if (document.body.classList.contains('touchscreen')) {
      window.removeEventListener('scroll', () => {
        if (isElementInViewport(workImages[i])) {
          infoBtnAnim.playSegments([0, 30], true);
        }
      });
    }
  }

  // FOOTER
  const footerAnim = lottie.loadAnimation({
    container: document.getElementById('footer__anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animationData/footer.json',
  });

  const footerEl = document.getElementById('footer');
  const playFooterAnimIfNeeded = () => {
    if (isElementInViewport(footerEl)) {
      footerAnim.play();
      window.removeEventListener('scroll', playFooterAnimIfNeeded);
    }
  };
  window.addEventListener('scroll', playFooterAnimIfNeeded);
  playFooterAnimIfNeeded();
};

export const toggleWorkBackBtn = (index, isViewingWorkInfo) => {
  if (isViewingWorkInfo) {
    workBackBtnAnims[index].playSegments([0, 30], true);
  }
  else {
    workBackBtnAnims[index].playSegments([31, 38], true);
  }
};
