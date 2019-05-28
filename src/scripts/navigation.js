import SmoothScroll from 'smooth-scroll';
import {isStackedSections} from './utils';

const smoothScroll = new SmoothScroll('[data-scroll]', {
  speed: 800,
  emitEvents: true,
});

// navbar
const navBtn = document.getElementById('nav__btn');
navBtn.onclick = () => {
  if (navBtn.classList.contains('is-active')) {
    navBtn.classList.remove('is-active');
    document.body.classList.remove('nav-open');
  }
  else {
    navBtn.classList.add('is-active');
    document.body.classList.add('nav-open');
  }
};

window.addEventListener('scrollStart', () => {
  navBtn.classList.remove('is-active');
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
    if (sections[i].getBoundingClientRect().top > 1) {
      nextScrollSection = sections[i];
      currentScrollSection = sections[i - 1];
    }
    else {
      break;
    }
  }
  console.log(currentScrollSection);
  console.log(nextScrollSection);
  const currentSectionBottom = currentScrollSection.getBoundingClientRect().bottom;
  if (currentSectionBottom > window.innerHeight + 1) {
    const targetY = currentSectionBottom - window.innerHeight + window.pageYOffset;
    smoothScroll.animateScroll(targetY);
    console.log('bottom');
  }
  else {
    smoothScroll.animateScroll(nextScrollSection);
    console.log('section');
  }
};

export const smoothScrollTo = (el) => {
  smoothScroll.animateScroll(el);
};

const header = document.getElementById('header');
export const modifyNavAndNextSectionBtnIfNeeded = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    nextBtn.classList.add('next-section-btn_hidden');
  }
  else {
    nextBtn.classList.remove('next-section-btn_hidden');
    if (header.getBoundingClientRect().bottom <= 0) {
      nextBtn.classList.add('orange');
      navBtn.classList.add('orange');
    }
    else {
      nextBtn.classList.remove('orange');
      navBtn.classList.remove('orange');
    }
  }
};
