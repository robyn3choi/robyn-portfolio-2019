import SmoothScroll from 'smooth-scroll';
import {isStackedSections, isElementInViewport} from './utils';

const navHeight = 60;

const smoothScroll = new SmoothScroll('[data-scroll]', {
  speed: 700,
  speedAsDuration: true,
  easing: 'easeInOutCubic',
  emitEvents: true,
  offset: (anchor, toggle) => {
    if (anchor.id === 'header' || anchor.id === 'footer') {
      return 0;
    }
    return navHeight;
  },
});

// mobile nav
const mobileNavBtn = document.getElementById('mobile-nav__btn');
mobileNavBtn.onclick = () => {
  if (mobileNavBtn.classList.contains('is-active')) {
    mobileNavBtn.classList.remove('is-active');
    document.body.classList.remove('nav-open');
  }
  else {
    mobileNavBtn.classList.add('is-active');
    document.body.classList.add('nav-open');
  }
};

window.addEventListener('scrollStart', () => {
  mobileNavBtn.classList.remove('is-active');
  document.body.classList.remove('nav-open');
});

// scroll sections
const scrollSections = document.getElementsByClassName('scroll-section');
const scrollSectionsStacked = document.getElementsByClassName('scroll-section_stacked');
const nextBtn = document.getElementById('next-section-btn');

nextBtn.onclick = () => {
  nextBtn.classList.remove('next-section-btn_ripple');
  let currentScrollSection;
  let nextScrollSection;
  const sections = isStackedSections() ? scrollSectionsStacked : scrollSections;

  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].getBoundingClientRect().top > navHeight + 1) {
      nextScrollSection = sections[i];
      currentScrollSection = sections[i - 1];
    }
    else {
      break;
    }
  }

  const currentSectionBottom = currentScrollSection.getBoundingClientRect().bottom;
  // if the current section is longer than this and the next full screen
  if (currentSectionBottom > 2 * window.innerHeight + navHeight + 1) {
    // scroll down 100vh
    smoothScroll.animateScroll(window.innerHeight + window.pageYOffset - navHeight);
  }
  // if the current section is longer than 100vh but doesn't take up the whole next screen
  else if (currentSectionBottom > window.innerHeight + navHeight + 1) {
    // scroll to bottom of section
    const targetY = currentSectionBottom - window.innerHeight + window.pageYOffset;
    smoothScroll.animateScroll(targetY);
  }
  else {
    smoothScroll.animateScroll(nextScrollSection);
  }
};

export const getNavHeight = () => navHeight;

export const smoothScrollTo = (el) => smoothScroll.animateScroll(el);

const aboutSection = document.getElementById('about');
const footer = document.getElementById('footer');
const sections = document.getElementsByClassName('section');
const navLinks = document.getElementsByClassName('nav__link');
const navBar = document.getElementById('nav');
const mobileNavContainer = document.getElementById('mobile-nav-container');
const colorEls = [];
colorEls.push(nextBtn, navBar, mobileNavBtn, mobileNavContainer);

export const modifyNavAndNextSectionBtnIfNeeded = () => {
  // change or hide nav section btn
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    nextBtn.classList.add('next-section-btn_hidden');
  }
  else {
    nextBtn.classList.remove('next-section-btn_hidden');
  }

  if (aboutSection.getBoundingClientRect().top <= navHeight) {
    nextBtn.classList.add('orange');
    navBar.classList.add('orange');
    mobileNavBtn.classList.add('orange');
    mobileNavContainer.classList.add('orange');
  }
  else {
    nextBtn.classList.remove('orange');
    navBar.classList.remove('orange');
    mobileNavBtn.classList.remove('orange');
    mobileNavContainer.classList.remove('orange');
  }
  if (footer.getBoundingClientRect().top <= navHeight + 1) {
    nextBtn.classList.add('black');
    navBar.classList.add('black');
    mobileNavBtn.classList.add('black');
    mobileNavContainer.classList.add('black');
  }
  else {
    nextBtn.classList.remove('black');
    navBar.classList.remove('black');
    mobileNavBtn.classList.remove('black');
    mobileNavContainer.classList.remove('black');
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('nav__link_current');
  }
  for (let i = sections.length - 1; i >= 0; i--) {
    if (isElementInViewport(sections[i])) {
      navLinks[i].classList.add('nav__link_current');
      // also mobile nav link
      navLinks[i + 5].classList.add('nav__link_current');
      break;
    }
  }
};
