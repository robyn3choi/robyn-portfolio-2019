import lottie from 'lottie-web';

// let playedAboutIntro = false;

export const playAnimations = () => {
  const aboutThoughtEl = document.getElementById('about__thought-anim');
  const aboutLightEl = document.getElementById('about__light-anim');

  lottie.loadAnimation({
    container: document.getElementById('header__robynchoi-anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/animationData/robynchoi.json',
  });

  const aboutThoughtAnim = lottie.loadAnimation({
    container: aboutThoughtEl,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animationData/about-thought.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  const aboutLightAnim = lottie.loadAnimation({
    container: aboutLightEl,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animationData/about-light.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  const playOneShot = () => {
    if (isElementHalfwayInView(aboutThoughtEl)) {
      aboutThoughtAnim.play();
      aboutLightAnim.play();
    }
  };

  window.addEventListener('scroll', playOneShot);
};

function isElementHalfwayInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2;
}
