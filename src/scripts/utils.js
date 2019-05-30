export const isStackedSections = () => {
  return window.innerWidth <= 1100 || window.innerHeight <= 635;
};

// is element 1/6 of the way up the screen
export const isElementInViewport = function(element, isWork = false) {
  const rect = element.getBoundingClientRect();

  if (isWork) {
    return rect.right <= window.innerWidth;
  }
  return rect.top <= window.innerHeight * (5 / 6) && rect.right <= window.innerWidth;
};

// export const playTypingAnimation = (el, text, delay) => {
//   return new Promise((resolve, reject) => {
//     let i = 0;
//     el.innerHTML = '';
//     const typingAnim = () => {
//       if (i < text.length) {
//         el.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typingAnim, delay);
//       }
//       else {
//         resolve();
//       }
//     };
//     typingAnim();
//   });
// };

export const playTypingAnimation = (el, delay) => {
  return new Promise((resolve, reject) => {
    let txt = el.innerHTML.trim();
    const txtLength = txt.length;

    const revealNextChar = (i) => {
      setTimeout(function() {
        if (txt.trim().slice(-1) == '>') {
          return;
        }

        if (txt.split('</span>').length == 1) {
          const txtArray = txt.split('');
          txtArray[0] = '<span style="visibility:visible;">' + txtArray[0] + '</span>';
          txt = txtArray.join('');
          el.innerHTML = txt;
        }
        // else move </span> one character ahead
        else {
          const txtHalves = txt.split('</span>');
          const notAppearedYetArray = txtHalves[1].split('');

          // if at <br>
          if (notAppearedYetArray[0] == '<') {
            i = i + 4;
            for (x = 0; x < 4; x++) {
              notAppearedYetArray.shift();
            }
            notAppearedYetArray[0] = '<br>' + notAppearedYetArray[0] + '</span>';
          }
          else {
            notAppearedYetArray[0] = notAppearedYetArray[0] + '</span>';
          }
          const notAppearedYet = notAppearedYetArray.join('');
          txt = txtHalves[0] + notAppearedYet;
          el.innerHTML = txt;
        }

        if (i == txtLength - 1) {
          resolve();
        }
        else if (++i < txtLength) {
          revealNextChar(i);
        }
      }, delay);
    };

    revealNextChar(0);
  });
};
