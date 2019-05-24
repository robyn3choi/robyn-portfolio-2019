import {isStackedSections} from './utils';

const sidebars = document.getElementsByClassName('section__sidebar');
const sections = document.getElementsByClassName('section');
let sectionYs = [];
let isStacked;

export const initFixedSidebars = () => {
  const setIsStacked = () => {
    const wasStacked = isStacked;
    isStacked = isStackedSections();
    if (!wasStacked && isStacked) {
      // if it wasn't stacked before but needs to be stacked now
      for (let i = 0; i < sidebars.length - 1; i++) {
        sidebars[i].classList.remove('section__sidebar_fixed');
        sidebars[i].style.top = 0;
      }
    }
  };

  const resetSectionYs = () => {
    const startingY =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sectionYs = [];
    for (let i = 0; i < sections.length; i++) {
      sectionYs.push(sections[i].getBoundingClientRect().top + startingY);
    }
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
  // if we are before the 1st section
  if (currentY < sectionYs[0] && sidebars[0].classList.contains('section__sidebar_fixed')) {
    sidebars[0].classList.remove('section__sidebar_fixed');
  }
  else {
    for (let i = 0; i < sectionYs.length - 1; i++) {
      // if we are in a section
      if (
        currentY > sectionYs[i] &&
        currentY < sectionYs[i + 1] - window.innerHeight &&
        !sidebars[i].classList.contains('section__sidebar_fixed')
      ) {
        sidebars[i].classList.add('section__sidebar_fixed');
        sidebars[i].style.top = 0;
        break;
      }
      // if we are in between sections
      else if (currentY > sectionYs[i + 1] - window.innerHeight && currentY < sectionYs[i + 1]) {
        sidebars[i].classList.remove('section__sidebar_fixed');
        // contact section has no sidebar
        if (i + 1 < sidebars.length) {
          sidebars[i + 1].classList.remove('section__sidebar_fixed');
        }
        sidebars[i].style.top = sections[i].offsetHeight - window.innerHeight + 'px';
        break;
      }
    }
  }
};
