export const isStackedSections = () => {
  return window.innerWidth <= 1100 || window.innerHeight <= 635;
};

export const isElementInViewport = function(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right < (window.innerWidth || document.documentElement.clientWidth)
  );

  // if (rect.clientHeight > window.innerHeight) {
  //   return rect.top < window.pageYOffset + window.innerHeight;
  // }
  // else if (rect.top <= 0) {
  //   return rect.bottom >= (window.innerHeight || document.documentElement.clientHeight);
  // }
  // else {
  //   return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  // }

  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
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
