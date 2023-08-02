export const isMobileDevice = () => {
  const mediaQuery = window.matchMedia("(max-width: 900px)");
  return mediaQuery.matches;
};
