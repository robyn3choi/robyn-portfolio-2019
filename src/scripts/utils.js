export const isStackedSections = () =>
  window.innerWidth <= 1100 || window.innerHeight <= 635;

export const isMobile = () => window.innerWidth <= 740;

// is element 1/6 of the way up the screen
export const isElementInViewport = (element, isWork = false) => {
  const rect = element.getBoundingClientRect();

  if (isWork) {
    return rect.right <= window.innerWidth;
  }
  return (
    rect.top <= window.innerHeight * (5 / 6) && rect.right <= window.innerWidth
  );
};
