import Rellax from 'rellax';

let isMobile = false;
let headerParallax;
let footerParallax;

export const initParallax = () => {
  headerParallax = new Rellax('.rellax_header');
  footerParallax = new Rellax('.rellax_footer', {
    wrapper: '#footer',
    relativeToWrapper: true,
  });

  toggleParallax();
  window.addEventListener('resize', toggleParallax);
};

const toggleParallax = () => {
  if (!isMobile && window.innerWidth <= 740) {
    headerParallax.destroy();
    footerParallax.destroy();
    isMobile = true;
  } else if (isMobile && window.innerWidth > 740) {
    headerParallax.refresh();
    footerParallax.refresh();
    isMobile = false;
  }
};
