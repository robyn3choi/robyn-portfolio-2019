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
  const aboutSection = document.getElementsByClassName('section_about')[0];

  const paragraphs = aboutSection.getElementsByTagName('p');
  const p1 = paragraphs[0];
  const p2 = paragraphs[1];

  const graphicHeadings = aboutSection.getElementsByClassName('graphic-heading-container');
  const gh1 = graphicHeadings[0];
  const gh2 = graphicHeadings[1];

  const skills = aboutSection.getElementsByClassName('about__skill');

  const pAnimLength = 600;
  const ghAnimLength = 800;

  p1.style.transitionDelay = '50ms';
  gh1.style.transitionDelay = 5000 + pAnimLength + 'ms';
  console.log(gh1.style.transitionDelay);
  for (let i = 0; i < skills.length; i++) {
    skills[i].style.transitionDelay = 10 + pAnimLength + ghAnimLength + i * 100 + 'ms';
  }
  const timeSoFar = 10 + pAnimLength + 200 * skills.length;
  gh2.style.transitionDelay = timeSoFar + 'ms';
  p2.style.transitionDelay = timeSoFar + ghAnimLength + 'ms';

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
  }
};

const playAboutContentAnims = () => {
  playTypingAnimation(document.getElementById('about__typed_1'), `Hey there, I'm Robyn Choi.`, 50)
      .then(() =>
        playTypingAnimation(
            document.getElementById('about__typed_2', 50),
            `I'm a full-stack web developer based in Vancouver, Canada.`
        )
      )
      .then(() => {
        const aboutSectionEnterAnims = document.getElementsByClassName('enter-anim_about');
        for (let i = 0; i < aboutSectionEnterAnims.length; i++) {
          aboutSectionEnterAnims[i].classList.add('enter-anim_finished');
        }
        // animate paragraph 1
        const firstParagraphEl = document.getElementById('about__p-anim_1');
        firstParagraphEl.classList.add('.enter-anim_finished');

      // animate graphic heading 1
      // animate skills
      // animate graphic heading 2
      // animate paragraph 2
      });
};
