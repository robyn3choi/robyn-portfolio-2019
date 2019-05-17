export const isStackedSections = () => {
  return window.innerWidth <= 1100 || window.innerHeight <= 635;
};

export const fixedSidebars = () => {
  const sidebars = document.getElementsByClassName('section__sidebar');
  const sections = document.getElementsByClassName('section');
  let sectionYs = [];
  let isStacked;

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

  const fixSidebarIfNeeded = () => {
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
          sidebars[i + 1].classList.remove('section__sidebar_fixed');
          sidebars[i].style.top = sections[i].offsetHeight - window.innerHeight + 'px';
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', fixSidebarIfNeeded);
  window.addEventListener('resize', () => {
    setIsStacked();
    resetSectionYs();
    fixSidebarIfNeeded();
  });

  setIsStacked();
  resetSectionYs();
  fixSidebarIfNeeded();
};

export const graphicHeadingAnim = () => {
  const graphicHeadings = document.getElementsByClassName('graphic-heading');
  let isScrolling = false;
  let timeout;
  // first, adjust width of graphic heading to match text
  for (let i = 0; i < graphicHeadings.length; i++) {
    const text = graphicHeadings[i].parentElement.getElementsByClassName(
        'graphic-heading__text'
    )[0];
    graphicHeadings[i].parentElement.style.width = (text.clientWidth + 6).toString() + 'px';
  }

  const endAnim = () => {
    for (let i = 0; i < graphicHeadings.length; i++) {
      graphicHeadings[i].classList.remove('graphic-heading_scrolling');
    }
    isScrolling = false;
  };

  const startAnim = () => {
    clearTimeout(timeout);
    timeout = setTimeout(endAnim, 20);
    if (!isScrolling) {
      for (let i = 0; i < graphicHeadings.length; i++) {
        if (isElementInViewport(graphicHeadings[i])) {
          graphicHeadings[i].classList.add('graphic-heading_scrolling');
        }
      }
      isScrolling = true;
    }
  };

  window.addEventListener('scroll', startAnim);
};

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
