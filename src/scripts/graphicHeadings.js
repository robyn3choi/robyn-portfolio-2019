let graphicHeadings;
export const resizeGraphicHeadings = () => {
  graphicHeadings = document.getElementsByClassName('graphic-heading');
  for (let i = 0; i < graphicHeadings.length; i++) {
    const text = graphicHeadings[i].parentElement.getElementsByClassName(
      'graphic-heading__text',
    )[0];
    graphicHeadings[i].parentElement.style.width =
      (text.clientWidth + 24).toString() + 'px';
  }
};

window.addEventListener('resize', resizeGraphicHeadings);
resizeGraphicHeadings();
