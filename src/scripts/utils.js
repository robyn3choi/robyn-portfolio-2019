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

export const playTypingAnimation = (el, text, delay) => {
  return new Promise((resolve, reject) => {
    let i = 0;
    el.innerHTML = '';
    const typingAnim = () => {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typingAnim, delay);
      }
      else {
        resolve();
      }
    };
    typingAnim();
  });
};
