import SmoothScroll from 'smooth-scroll';
import {isStackedSections, isElementInViewport} from './utils';

const navHeight = 60;

export const getNavHeight = () => {
  return navHeight;
};

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
  if (currentSectionBottom > window.innerHeight + navHeight + 1) {
    const targetY = currentSectionBottom - window.innerHeight + window.pageYOffset;
    smoothScroll.animateScroll(targetY);
  }
  else {
    smoothScroll.animateScroll(nextScrollSection);
  }
};

export const smoothScrollTo = (el) => {
  smoothScroll.animateScroll(el);
};

const aboutSection = document.getElementById('about');
const sections = document.getElementsByClassName('section');
const navLinks = document.getElementsByClassName('nav__link');

export const modifyNavAndNextSectionBtnIfNeeded = () => {
  // change or hide nav section btn
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    nextBtn.classList.add('next-section-btn_hidden');
  }
  else {
    nextBtn.classList.remove('next-section-btn_hidden');
    if (isElementInViewport(aboutSection)) {
      nextBtn.classList.add('orange');
      // mobileNavBtn.classList.add('orange');
    }
    else {
      nextBtn.classList.remove('orange');
      // mobileNavBtn.classList.remove('orange');
    }
  }

  // underline the current section's nav link
  const nav = document.getElementById('nav');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('nav__link_current');
  }
  for (let i = sections.length - 1; i >= 0; i--) {
    if (isElementInViewport(sections[i])) {
      navLinks[i].classList.add('nav__link_current');
      // also mobile nav link
      navLinks[i + 5].classList.add('nav__link_current');
      // if the current section is the header or footer
      if (i === 0 || i === sections.length - 1) {
        nav.classList.add('nav_hidden');
      }
      else {
        nav.classList.remove('nav_hidden');
      }
      break;
    }
  }

  // hide nav bar during header and footer
};
