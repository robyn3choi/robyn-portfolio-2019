import Rellax from 'rellax';

var rellax = new Rellax('.rellax');

fixedSidebars();

function fixedSidebars() {
  const sidebars = document.getElementsByClassName('section__sidebar');
  const sections = document.getElementsByClassName('section');
  let sectionYs = [];
  const startingY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  for (let section of sections) 
  {
    sectionYs.push(section.getBoundingClientRect().top + startingY);
  }

  const fixSidebarIfNeeded = () => {
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
            sidebars[i].classList.add('section__sidebar_fixed');
            sidebars[i].style.top = 0;
            break;
          }
          // if we are in between sections
          else if (currentY > sectionYs[i + 1] - window.innerHeight
            && currentY < sectionYs[i + 1]) 
          {
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
  fixSidebarIfNeeded();
}
