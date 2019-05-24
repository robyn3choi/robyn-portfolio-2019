import {isStackedSections} from './utils';

// const sidebars = document.getElementsByClassName('section__sidebar');
// const sections = document.getElementsByClassName('section');
// let sectionYs = [];
let isStacked;

let aboutSidebar;
let aboutSection;
let aboutSectionY;
let worksSidebar;
let worksSection;
let worksSectionY;
let contactSection; // contact section has no sidebar
let contactSectionY;

export const initFixedSidebars = () => {
  const sidebars = document.getElementsByClassName('section__sidebar');
  aboutSidebar = sidebars[0];
  worksSidebar = sidebars[1];

  const sections = document.getElementsByClassName('section');
  aboutSection = sidebars[0];
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

  const resetSectionYs = () => {
    const startingY =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    aboutSectionY = aboutSection.getBoundingClientRect().top + startingY;
    worksSectionY = worksSection.getBoundingClientRect().top + startingY;
    contactSectionY = contactSection.getBoundingClientRect().top + startingY;
  };

  // window.addEventListener('scroll', fixSidebarIfNeeded);
  window.addEventListener('resize', () => {
    setIsStacked();
    resetSectionYs();
    fixSidebarIfNeeded();
  });

  setIsStacked();
  resetSectionYs();
  fixSidebarIfNeeded();
};

export const fixSidebarIfNeeded = () => {
  if (isStackedSections()) {
    return;
  }

  const currentY =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // if we are before the about section, make sure the about sidebar is not fixed
  if (currentY < aboutSectionY && aboutSidebar.classList.contains('section__sidebar_fixed')) {
    aboutSidebar.classList.remove('section__sidebar_fixed');
  }
  else if (
    currentY >= aboutSectionY &&
    currentY < worksSectionY - window.innerHeight &&
    !aboutSidebar.classList.contains('section__sidebar_fixed')
  ) {
    // fix the about sidebar
    aboutSidebar.classList.add('section__sidebar_fixed');
    aboutSidebar.style.top = 0;
  }
  // if we have entered the works section
  else if (
    currentY >= worksSectionY &&
    currentY < contactSectionY - window.innerHeight &&
    !worksSidebar.classList.contains('section__sidebar_fixed')
  ) {
    // fix the works sidebar
    worksSidebar.classList.add('section__sidebar_fixed');
    worksSidebar.style.top = 0;
  }
  // if we are between the about and works sections
  else if (currentY > worksSectionY - window.innerHeight && currentY < worksSectionY) {
    // neither sidebar should be fixed, and about sidebar should have a top: something
    aboutSidebar.classList.remove('section__sidebar_fixed');
    worksSidebar.classList.remove('section__sidebar_fixed');
    aboutSidebar.style.top = aboutSection.offsetHeight - window.innerHeight + 'px';
  }
  // if we are in between work and contact sections
  else if (currentY > contactSectionY - window.innerHeight && currentY < contactSectionY) {
    // work sidebar should not be fixed, and work sidebar should have a top: something
    worksSidebar.classList.remove('section__sidebar_fixed');
    worksSidebar.style.top = worksSection.offsetHeight - window.innerHeight + 'px';
  }
};
