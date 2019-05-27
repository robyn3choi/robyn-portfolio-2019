import {isStackedSections} from './utils';

// const sidebars = document.getElementsByClassName('section__sidebar');
// const sections = document.getElementsByClassName('section');
// let sectionYs = [];
let isStacked;

let aboutSidebar;
let aboutSection;
let worksSidebar;
let worksSection;
let contactSection; // contact section has no sidebar

export const initFixedSidebars = () => {
  const sidebars = document.getElementsByClassName('section__sidebar');
  aboutSidebar = sidebars[0];
  worksSidebar = sidebars[1];

  const sections = document.getElementsByClassName('section');
  aboutSection = sections[0];
  worksSection = sections[1];
  contactSection = sections[2];

  const setIsStacked = () => {
    const wasStacked = isStacked;
    isStacked = isStackedSections();
    if (!wasStacked && isStacked) {
      // if it wasn't stacked before but needs to be stacked now
      aboutSidebar.classList.remove('section__sidebar_fixed');
      aboutSidebar.style.top = 0;
      worksSidebar.classList.remove('section__sidebar_fixed');
      worksSidebar.style.top = 0;
    }
  };

  // window.addEventListener('scroll', fixSidebarIfNeeded);
  window.addEventListener('resize', () => {
    setIsStacked();
    fixSidebarIfNeeded();
  });

  setIsStacked();
  fixSidebarIfNeeded();
};

export const fixSidebarIfNeeded = () => {
  if (isStackedSections()) {
    return;
  }
  // const aboutSectionTop = aboutSection.getBoundingClientRect().top;
  // const worksSectionTop = worksSection.getBoundingClientRect().top;
  // const contactSectionTop = contactSection.getBoundingClientRect().top;
  // // if we are before the about section, make sure the about sidebar is not fixed
  // if (aboutSectionTop > 0 && aboutSidebar.classList.contains('section__sidebar_fixed')) {
  //   aboutSidebar.classList.remove('section__sidebar_fixed');
  // }
  // // if we have entered the about section
  // else if (
  //   aboutSectionTop <= 0 &&
  //   worksSectionTop > window.innerHeight &&
  //   !aboutSidebar.classList.contains('section__sidebar_fixed')
  // ) {
  //   // fix the about sidebar
  //   aboutSidebar.classList.add('section__sidebar_fixed');
  //   aboutSidebar.style.top = 0;
  // }
  // // if we are between the about and works sections
  // else if (worksSectionTop - window.innerHeight < 0 && worksSectionTop > 0) {
  //   aboutSidebar.classList.remove('section__sidebar_fixed');
  //   worksSidebar.classList.remove('section__sidebar_fixed');
  //   aboutSidebar.style.top = aboutSection.offsetHeight - window.innerHeight + 'px';
  // }
  // // if we have entered the works section
  // else if (
  //   worksSectionTop <= 0 &&
  //   contactSectionTop > window.innerHeight &&
  //   !worksSidebar.classList.contains('section__sidebar_fixed')
  // ) {
  //   // fix the works sidebar
  //   worksSidebar.classList.add('section__sidebar_fixed');
  //   worksSidebar.style.top = 0;
  // }
  // // if we are in between work and contact sections
  // else if (contactSectionTop - window.innerHeight < 0 && contactSectionTop > 0) {
  //   // work sidebar should not be fixed, and work sidebar should have a top: something
  //   worksSidebar.classList.remove('section__sidebar_fixed');
  //   worksSidebar.style.top = worksSection.offsetHeight - window.innerHeight + 'px';
  // }
};
