let state = {
  hasCupSpilled: false
}

export const toggleWorkDetails = (index) => 
{
  const work = document.getElementsByClassName('work')[index];
  if (work.classList.contains('work_viewing-details')) 
  {
    work.classList.remove('work_viewing-details');
  }
  else 
  {
    work.classList.add('work_viewing-details');
    if (!state.hasCupSpilled) {
      const cupRightEdgeX = document.getElementById('cup-anim__wrapper').getBoundingClientRect().right;
      pollForCupSpill(work, cupRightEdgeX);
    }
  }
}

function pollForCupSpill(work, cupRightEdgeX) 
{
  if (work.getBoundingClientRect().left <= cupRightEdgeX) 
  {
    document.getElementById('cup-anim').style.animation = "cup-spill 0.02s steps(2) forwards";
    state.hasCupSpilled = true;
  } 
  else 
  {
    setTimeout(() => pollForCupSpill(work, cupRightEdgeX), 50);
  }
}
