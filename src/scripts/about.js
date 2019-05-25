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
  // const skills = document.getElementsByClassName('about__skill');
  // for (let i = 0; i < skills.length; i++) {
  //   skills[i].style.transitionDelay = 100 * i + 'ms';
  // }

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
    // aboutAnim.playSegments([[0, 74], [75, 150]], true);
    // setTimeout(playAboutContentAnims, 2200);
    aboutAnim.playSegments([[0, 27], [28, 101]], true);
    playTypingAnimation(
        document.getElementById('about__typed_1'),
        `Hey there, I'm Robyn Choi.`,
        50
    ).then(() =>
      playTypingAnimation(
          document.getElementById('about__typed_2'),
          `I'm a full-stack web developer based in Vancouver, Canada.`,
          30
      )
    );
    hasPlayedAnim = true;
    return true;
  }
  return false;
};

// const playAboutContentAnims = () => {
//   playTypingAnimation(
//       document.getElementById('about__typed_1'),
//       `Hey there, I'm Robyn Choi.`,
//       100
//   ).then(() =>
//     playTypingAnimation(
//         document.getElementById('about__typed_2', 100),
//         `I'm a full-stack web developer based in Vancouver, Canada.`
//     )
//   );
// };
