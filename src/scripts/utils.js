export const fixedSidebars = () => 
{
  const sidebars = document.getElementsByClassName('section__sidebar');
  const sections = document.getElementsByClassName('section');
  let sectionYs = [];

  const resetSectionYs = () => {
    const startingY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sectionYs = [];
    for (let section of sections) 
    {
      sectionYs.push(section.getBoundingClientRect().top + startingY);
    }
  }

  const fixSidebarIfNeeded = () => 
  {
    const currentY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // if we are before the 1st section
    if (currentY < sectionYs[0] && sidebars[0].classList.contains('section__sidebar_fixed')) 
    {
      sidebars[0].classList.remove('section__sidebar_fixed');
    }
    else 
    {
      for (let i = 0; i < sectionYs.length; i++) 
      {
        if (i < sectionYs.length - 1) 
        {
          // if we are in a section
          if (currentY > sectionYs[i]
            && currentY < sectionYs[i + 1] - window.innerHeight
            && !sidebars[i].classList.contains('section__sidebar_fixed')) 
          {
            console.log("in section " + i);
            sidebars[i].classList.add('section__sidebar_fixed');
            sidebars[i].style.top = 0;
            break;
          }
          // if we are in between sections
          else if (currentY > sectionYs[i + 1] - window.innerHeight
            && currentY < sectionYs[i + 1]) 
          {
            console.log("between section " + i + "and " + (i+1));
            sidebars[i].classList.remove('section__sidebar_fixed');
            sidebars[i+1].classList.remove('section__sidebar_fixed');
            sidebars[i].style.top = sections[i].offsetHeight - window.innerHeight + 'px';
            break;
          }
        }
      }
    }
  };

  window.addEventListener('scroll', fixSidebarIfNeeded);
  window.addEventListener('resize', () => {
    resetSectionYs();
    fixSidebarIfNeeded();
  });

  resetSectionYs();
  fixSidebarIfNeeded();
}


// export const workImageHover = () => 
// {
//   const workImages = document.getElementsByClassName('work__image');
//   for (img of workImages) 
//   {
//     img.addEventListener('mouseenter', e => e.target.classList.add('work__image_hover'));
//     img.addEventListener('mouseleave', e => e.target.classList.remove('work__image_hover'));
//   }
// }


export const graphicHeadingAnim = () => 
{
  const graphicHeadings = document.getElementsByClassName('graphic-heading');
  let isScrolling = false;
  let timeout;
  // first, adjust width of graphic heading to match text
  // for (let heading of graphicHeadings)
  // {
  //   const text = heading.parentElement.getElementsByClassName('graphic-heading__text')[0];
  //   heading.parentElement.style.width = text.clientWidth.toString() + "px";
  // }

  const endAnim = () =>
  {
    for (let heading of graphicHeadings)
    {
      heading.classList.remove('graphic-heading_scrolling');
    }
    isScrolling = false;
  }

  const startAnim = () => 
  { 
    clearTimeout(timeout);
    timeout = setTimeout(endAnim, 20);
    if (!isScrolling) 
    {
      for (let heading of graphicHeadings)
      {
        heading.classList.add('graphic-heading_scrolling');
      }
      isScrolling = true;
    }
  }

  window.addEventListener('scroll', startAnim);
}