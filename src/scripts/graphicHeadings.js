let graphicHeadings;
const resizeGraphicHeadings = () => {
  graphicHeadings = document.getElementsByClassName('graphic-heading');
  for (let i = 0; i < graphicHeadings.length; i++) {
    const text = graphicHeadings[i].parentElement.getElementsByClassName(
        'graphic-heading__text'
    )[0];
    graphicHeadings[i].parentElement.style.width = (text.clientWidth + 6).toString() + 'px';
  }
};

window.addEventListener('resize', resizeGraphicHeadings);
resizeGraphicHeadings();
