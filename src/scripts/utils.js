export const isStackedSections = () => {
  return window.innerWidth <= 1100 || window.innerHeight <= 635;
};

export const isElementInViewport = function(el) {
  const rect = el.getBoundingClientRect();

  if (rect.top <= 0) {
    return rect.bottom >= (window.innerHeight / 2 || document.documentElement.clientHeight / 2);
  }
  else {
    return rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2);
  }
};

export const isTouchscreen = false;

export const playTypingAnimation = (el, text, delay) => {
  return new Promise((resolve, reject) => {
    let i = 0;
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
