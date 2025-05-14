export const getImage = (path) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};
