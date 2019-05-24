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

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const isTouchscreen = false;
