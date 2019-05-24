import lottie from 'lottie-web';

export const playHeaderAnim = () => {
  const headerAnimEls = document.getElementsByClassName('header__robynchoi-anim');
  lottie.loadAnimation({
    container: headerAnimEls[0],
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/animationData/robynchoi.json',
  });

  lottie.loadAnimation({
    container: headerAnimEls[1],
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/animationData/robynchoi-mobile.json',
  });
};
