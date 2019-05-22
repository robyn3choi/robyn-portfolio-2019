import {isStackedSections} from './utils';
import {toggleWorkBackBtn} from './animations';

let hasCupSpilled = false;

export const toggleWorkInfo = (index) => {
  const work = document.getElementsByClassName('work')[index];

  if (work.classList.contains('work_viewing-info')) {
    work.classList.remove('work_viewing-info');
    toggleWorkBackBtn(index, false);
  }
  else {
    work.classList.add('work_viewing-info');
    toggleWorkBackBtn(index, true);

    if (!hasCupSpilled) {
      const cupRightEdgeX = document.getElementById('cup-anim__wrapper').getBoundingClientRect()
          .right;

      if (!isStackedSections()) {
        pollForCupSpill(work, cupRightEdgeX);
      }
    }
  }
};

function pollForCupSpill(work, cupRightEdgeX) {
  if (work.getBoundingClientRect().left <= cupRightEdgeX) {
    document.getElementById('cup-anim').style.animation = 'cup-spill 0.1s steps(3) forwards';
    hasCupSpilled = true;
  }
  else {
    setTimeout(() => pollForCupSpill(work, cupRightEdgeX), 50);
  }
}
