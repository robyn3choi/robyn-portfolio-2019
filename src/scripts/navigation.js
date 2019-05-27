import SmoothScroll from 'smooth-scroll';

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
const nextBtn = document.getElementById('next-section-btn');
nextBtn.onclick = () => {
  nextBtn.classList.remove('next-section-btn_ripple');
  let currentScrollSection;
  let nextScrollSection;
  for (let i = scrollSections.length - 1; i >= 0; i--) {
    if (scrollSections[i].getBoundingClientRect().top > 1) {
      nextScrollSection = scrollSections[i];
      currentScrollSection = scrollSections[i - 1];
    }
    else {
      break;
    }
  }

  const currentSectionBottom = currentScrollSection.getBoundingClientRect().bottom;
  if (currentSectionBottom > window.innerHeight + 1) {
    const targetY = currentSectionBottom - window.innerHeight + window.pageYOffset;
    smoothScroll.animateScroll(targetY);
  }
  else {
    smoothScroll.animateScroll(nextScrollSection);
  }
};

export const hideNextSectionBtnIfNeeded = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    nextBtn.classList.add('next-section-btn_hidden');
  }
  else {
    nextBtn.classList.remove('next-section-btn_hidden');
  }
};

export const smoothScrollTo = (el) => {
  smoothScroll.animateScroll(el);
};
