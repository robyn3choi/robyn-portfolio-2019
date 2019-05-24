import {isElementInViewport} from './utils';

let hasStartedScroll = false;
let timeout;
let graphicHeadings;

export const initGraphicHeadings = () => {
  graphicHeadings = document.getElementsByClassName('graphic-heading');
  // first, adjust width of graphic heading to match text
  for (let i = 0; i < graphicHeadings.length; i++) {
    const text = graphicHeadings[i].parentElement.getElementsByClassName(
        'graphic-heading__text'
    )[0];
    graphicHeadings[i].parentElement.style.width = (text.clientWidth + 6).toString() + 'px';
  }
  // window.addEventListener('scroll', startAnim);
};

const endAnim = () => {
  for (let i = 0; i < graphicHeadings.length; i++) {
    graphicHeadings[i].classList.remove('graphic-heading_scrolling');
  }
  hasStartedScroll = false;
};

export const playGraphicHeadingsAnim = () => {
  if (document.body.classList.contains('touchscreen')) {
    return;
  }
  clearTimeout(timeout);
  timeout = setTimeout(endAnim, 20);
  if (!hasStartedScroll) {
    for (let i = 0; i < graphicHeadings.length; i++) {
      if (isElementInViewport(graphicHeadings[i])) {
        graphicHeadings[i].classList.add('graphic-heading_scrolling');
      }
    }
    hasStartedScroll = true;
  }
};
