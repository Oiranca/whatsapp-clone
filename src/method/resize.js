export const resize = () => {
  let widthWindows;


    window.addEventListener('resize', () => {
      widthWindows=window.innerWidth;
    });
  console.log(widthWindows);
  return widthWindows;
};
