import lottie from 'lottie-web';
import {isElementInViewport, playTypingAnimation} from './utils';

let aboutEl;
let aboutAnim;
let hasPlayedAnim = false;
// let p1; // first <p> anim
// let gh1; // first graphic heading anim
// let skills;
// let gh2;
// let p2;

export const initAboutAnim = () => {
  const skills = document.getElementsByClassName('about__skill');
  for (let i = 0; i < skills.length; i++) {
    skills[i].style.transitionDelay = 100 * i + 'ms';
  }

  aboutEl = document.getElementById('about__anim');
  aboutAnim = lottie.loadAnimation({
    container: aboutEl,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    autoload: false,
    path: '/animationData/about.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  playAboutAnimIfNeeded();
};

export const playAboutAnimIfNeeded = () => {
  if (!hasPlayedAnim && isElementInViewport(aboutEl)) {
    aboutAnim.playSegments([[0, 74], [75, 150]], true);
    setTimeout(playAboutContentAnims, 2200);
    hasPlayedAnim = true;
    return true;
  }
  return false;
};

const playAboutContentAnims = () => {
  playTypingAnimation(document.getElementById('about__typed_1'), `Hey there, I'm Robyn Choi.`, 100)
      .then(() =>
        playTypingAnimation(
            document.getElementById('about__typed_2', 100),
            `I'm a full-stack web developer based in Vancouver, Canada.`
        )
      )
      .then(() => {
      // const aboutSectionEnterAnims = document.getElementsByClassName('enter-anim enter-anim_hidden');
      // for (let i = 0; i < aboutSectionEnterAnims.length; i++) {
      //   aboutSectionEnterAnims[i].classList.add('enter-anim enter-anim_hidden_finished');
      // }
      // animate paragraph 1
      // const firstParagraphEl = document.getElementById('about__p-anim_1');
      // firstParagraphEl.classList.remove('enter-anim_hidden');
      // animate graphic heading 1
      // animate skills
      // animate graphic heading 2
      // animate paragraph 2
      });
};
