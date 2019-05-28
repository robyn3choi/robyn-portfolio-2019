export const isStackedSections = () => {
  return window.innerWidth <= 1100 || window.innerHeight <= 635;
};

export const isElementInViewport = function(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.right <= window.innerWidth;
};

export const isTouchscreen = false;

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
